import React from 'react';
import { useState, useRef } from 'react';
import { API } from 'aws-amplify';
import * as mutations from './graphql/mutations';

export default () => {

  const fileInput = useRef(null);
  const selectFile = () => {
    fileInput.current.click();
    console.log(fileInput);
  }

  const [filedata, updateFileData] = useState(null);

  async function handleFileChange(event) {
    const fileObj = event.target.files && event.target.files[0];
    console.log('file is ', fileObj.name);
    /* saveToS3(fileObj); */
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      const data = csvToArray(text);
      console.log(data);
      updateFileData(data);
      //for (let i = 0; i < data.length; i++) {
      //  if (data[i].firstname)
      //    console.log(data[i].firstname);
      //}
    };

    reader.readAsText(fileObj);
  }

  function handleCreateError (error) {
    console.log('handle create process error', error);
  }

  async function checkData () {
    console.log('state data', filedata);
    if (filedata) {
      const processData = {
        name: filedata[0].name,
        description: filedata[0].description,
        pictureurl: filedata[0].pictureurl,
      };
      const createProcess = await API.graphql({ query: mutations.createProcess,
                                                variables: { input: processData }})
                            .then((response) => console.log('success', response))
                            .catch((error) => handleCreateError(error));
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
      Choose Process table file
      <p />
      <input
        type="file" accept=".csv"
        ref={fileInput}
        onChange={handleFileChange} />
      <button onClick={checkData}>push me</button>
    </div>
  );
};
