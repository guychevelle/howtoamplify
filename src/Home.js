import React from 'react';
import { useState } from 'react';
import { Text } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { HowToProcess, HowToProcessCollection } from './ui-components';
import { HowToStepsCollection } from './ui-components';

import { API } from 'aws-amplify';
import * as queries from './graphql/queries';

export default (props) => {

  //  useNavigate() is a react-router-dom hook that lets us navigate
  //  to a page without using a <Link>; Since it is a React 'Hook', it
  //  must be declared in the top level function
  let navigate = useNavigate();

  const authmode = props.userInfo ? "AMAZON_COGNITO_USER_POOLS" :
                                    "AWS_IAM";

  const [processes, updateProcesses] = useState(null);
  const [steps, updateSteps] = useState(null);

  function ClickedItem (item) {
    console.log('clicked item', item);
    console.log('selected process:', item.name);
    // update the selected Process in the calling parent code
    props.updateItem(item);
    navigate("/steps");
  }

  function setProcesses (data) {
    console.log('set process data', data);
    updateProcesses(data.listProcesses.items.filter(function (a) {
                                                    return !a._deleted}));
  }

  function handleGetProcessesError (error) {
    console.log('handleGetProcessesError', error);
    if (error.data)
      console.log('data available');
  }

  function setSteps (data) {
    console.log('set steps data', data);
    //  filter out an '_deleted' entries
    updateSteps(data.listSteps.items.filter(function (a) {
                                            return !a._deleted}));
  }

  function handleGetStepsError (error) {
    console.log('handle error', error);
    if (error.data)
      updateSteps(error.data.listSteps.items);
  }

  async function getProcesses () {
    const allProcesses = await API.graphql({ query: queries.listProcesses,
                                             authMode: authmode })
                         .then((response) => setProcesses(response.data))
                         .catch((error) => handleGetProcessesError(error));
  }


  //  the below is getting ALL steps, not steps specific to a Process
  async function getSteps() {
    //  need to differentiate authenticated vs non-authenticated users
    console.log('in getSteps()');
    const allSteps = await API.graphql({ query: queries.listSteps,
                                         authMode: authmode })
                     .then((response) => setSteps(response.data))
                     .catch((error) => handleGetStepsError(error));
  }

  if (!processes)
    getProcesses();

  //if (!steps)
  //  getSteps();

  const processCollectionOverrides = props.screenWidth < 700
    ? {
       "HowToProcessCollection": {
         type: "list"
       }
      }
    : {
       "HowToProcessCollection": {
         type: "grid",
         templateColumns: "1fr 1fr"
       }
      }

  return (
    <div>
      <p />
      <h2><center>AWS Amplify Quick Tutorials</center></h2>
      <p />
      <div>
        {processes ? <HowToProcessCollection 
                       items={processes}
                       overrides={processCollectionOverrides}
                       overrideItems={({ item, index }) => ({
                         onClick: () => ClickedItem(item),
                         width: '350px'
                       })} /> :
                     'No processes defined'}
        <p />
      </div>
    </div>
  );
};

/*
  process and steps displayed as html lists
        <p />
        Processes:
        <ul>
          {processes ? processes.map((process, index) => (
                                    <li key={process.id}>{process.name}</li>
                                    )) :
                       ""}
        </ul>
        Steps:
        <ul>
          {steps ? steps.map((step, index) => (
                             <li key={step.id}>{step.name}</li>
                            )) :
                   ""}
        </ul>

How it used to be with Proceses connecting to the model
      <div>
        <HowToProcessCollection overrideItems={({ item, index }) => ({
          onClick: () => ClickedItem(item)
        })} />
        <p></p>
        {stepitems ? <HowToStepsCollection items={stepitems} 
                       overrideItems={({ item, index }) => ({
                         onClick: () => clickedStep(item)
                     })} /> :
                     'Process not selected'}
      </div>

        <HowToProcessCollection overrideItems={({ item, index }) => ({
          onClick: () => ClickedItem(item)
          })} />
        <HowToProcessCollection overrideItems={({ item, index }) => ({
          onClick: () => ClickedItem(item)
          {steps ? steps.map((step, index) => (
                             <li key={step.id}>{step.name}</li>
                            )) :
                   ""}
*/
