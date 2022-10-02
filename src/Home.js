import React from 'react';
import { useState } from 'react';
import { HowToProcess, HowToProcessCollection } from './ui-components';
import { HowToStepsCollection } from './ui-components';

import { API } from 'aws-amplify';
import * as queries from './graphql/queries';

export default (props) => {

  console.log('home props', props);

  const authmode = props.userInfo ? "AMAZON_COGNITO_USER_POOLS" :
                                    "AWS_IAM";

  const [processes, updateProcesses] = useState(null);
  const [steps, updateSteps] = useState(null);
  const [stepitems, updateStepItems] = useState(null);

  function clickedItem (item) {
    console.log('clicked item', item);
    console.log('selected process:', item.name);
    console.log('with step count', item.steps.length);
    updateStepItems(item.steps);
  }

  function clickedStep (item) {
    console.log('clicked step', item);
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

  if (!steps)
    getSteps();

  return (
    <div>
      <p />
      <h2>Home Page</h2>
      <p />
      <div>
        {props.userInfo ? props.userInfo.attributes.name + ' content' :
                          'anonymous content'
        }
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
      </div>
      <div>
        <HowToProcessCollection overrideItems={({ item, index }) => ({
          onClick: () => clickedItem(item)
        })} />
        <p></p>
        {stepitems ? <HowToStepsCollection items={stepitems} 
                       overrideItems={({ item, index }) => ({
                         onClick: () => clickedStep(item)
                     })} /> :
                     'Process not selected'}
      </div>
    </div>
  );
};

/*
          {steps ? steps.map((step, index) => (
                             <li key={step.id}>{step.name}</li>
                            )) :
                   ""}
*/
