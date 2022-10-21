import React from 'react';
import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as mutations from './graphql/mutations';

export default () => {

  const [categorydata, updateCategoryData] = useState(null);
  const [catkeys, updateCatKeys] = useState([]);
  const [processdata, updateProcessData] = useState(null);
  const [stepsdata, updateStepsData] = useState(null);
  const [loadenabled, updateLoadEnabled] = useState(false);
  const [enablecount, updateEnableCount] = useState(0);
  // we will update a status message on the page during load; not
  // a needed user feature, but other data like catkeys will not
  // reflect updates unless the page is re-rendered (it's a useState()
  // feature/flaw
  const [loadstatus, updateLoadStatus] = useState(null);

  useEffect(() => {
    console.log('running useEffect');
  }, [enablecount, loadstatus]);
  
  useEffect(() => {
    console.log('catkeys useeffect', catkeys);
  }, [catkeys]);

  async function readFileData(fileobj, updatefunc) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      const data = csvToArray(text);
      console.log(data);
      updatefunc(data);
    };

    reader.readAsText(fileobj);
  }

  function handleCategoryFileChange(event) {
    const fileObj = event.target.files && event.target.files[0];
    console.log('category file is', fileObj.name);
    readFileData(fileObj, updateCategoryData);
  }

  function handleProcessFileChange(event) {
    const fileObj = event.target.files && event.target.files[0];
    console.log('process file is', fileObj.name);
    readFileData(fileObj, updateProcessData);
    if (stepsdata) {
      updateLoadEnabled(true);
      updateEnableCount(enablecount+1);
    }
  }

  function handleStepsFileChange(event) {
    const fileObj = event.target.files && event.target.files[0];
    console.log('steps file is', fileObj.name);
    readFileData(fileObj, updateStepsData);
    if (processdata) {
      updateLoadEnabled(true);
      updateEnableCount(enablecount+1);
    }
  }

  function processCategoryAdd(data, pk) {
    console.log('processcategoryadd', data);
    updateCatKeys(current => [...current, {id: data.data.createCategory.id, key: pk}]);
  }

  function handleCreateCategoryError (error) {
    console.log('handle create category error', error);
  }

  function handleCreateProcessError (error) {
    console.log('handle create process error', error);
  }

  function handleCreateStepError (error) {
    console.log('handle create step error', error);
  }

  async function loadSteps (processfileitem, createdprocessdata) {
    console.log('created process data', createdprocessdata);
    for (let i = 0; i < stepsdata.length; i++) {
      if (!stepsdata[i].name)
        continue;
      if (stepsdata[i].processkey === processfileitem.pk) {
        let stepdata = {
          stepnum: stepsdata[i].stepnum,
          name: stepsdata[i].name,
          description: stepsdata[i].description,
          pictureurl: stepsdata[i].pictureurl,
          steptext: stepsdata[i].steptext,
          processStepsId: createdprocessdata.data.createProcess.id
        }
        let steps = await API.graphql({ query: mutations.createSteps,
                                        variables: { input: stepdata }})
                    .then((response) => console.log('created step', response))
                    .catch((error) => handleCreateStepError(error));
      }
    }
  }

  async function loadCategories () {
    console.log('load categories', categorydata);
    for (let i = 0; i < categorydata.length; i++) {
      if (!categorydata[i].name)
        continue;

      updateLoadStatus('loading category ' + i.toString() + ' of ' + (categorydata.length-1).toString());

      let catdata = {
        name: categorydata[i].name,
        order: categorydata[i].order
      }

      let cat = await API.graphql({ query: mutations.createCategory,
                                    variables: { input: catdata }})
                .then((response) => processCategoryAdd(response, categorydata[i].pk))
                .catch((error) => handleCreateCategoryError(error));
    }
    updateLoadStatus('category load complete');
  }

  function getCategoryId (processcatkey) {
    for (let i = 0; i < catkeys.length; i++)
      if (processcatkey == catkeys[i].key)
        return catkeys[i].id;
    return null;
  }

  async function loadData () {
    console.log('state data', processdata);
    if (processdata) {
      for (let i = 0; i < processdata.length; i++) {
        if (!processdata[i].name)
          continue;

        const catid = getCategoryId(processdata[i].categorykey);
        if (!catid) {
          console.log('unable to find cat key', processdata);
          continue;
        }

        const processData = {
          name: processdata[i].name,
          description: processdata[i].description,
          pictureurl: processdata[i].pictureurl,
          processCategoryId: catid
        };
        const createProcess = await API.graphql({ query: mutations.createProcess,
                                                variables: { input: processData }})
                            .then((response) => loadSteps(processdata[i], response))
                            .catch((error) => handleCreateProcessError(error));
      }
    }
  }

  function csvToArray(str, delimiter = ",") {

    // slice from start of text to the first \n index
    // use split to create an array from string by delimiter
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    // Map the rows
    // split values from each row into an array
    // use headers.reduce to create an object
    // object properties derived from headers:values
    // the object passed as an element of the array
    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });

    // return the array
    return arr;
  }


  return (
    <div>
      <p />
      <h2>Load Data</h2>
      <p />
      Choose Category table file
      <p />
      <input
        type="file" accept=".csv"
        onChange={handleCategoryFileChange} />
      <p />
      <button onClick={loadCategories}>Load Categories</button>
      <p />
      Choose Process table file
      <p />
      <input
        type="file" accept=".csv"
        onChange={handleProcessFileChange} />
      <p />
      Choose Steps table file
      <p />
      <input
        type="file" accept=".csv"
        onChange={handleStepsFileChange} />
      <p />
      {loadenabled ? <button onClick={loadData}>Load Data</button> :
                    <button disabled>Load Data</button>}
      <p />
      {loadstatus}
    </div>
  );
};
