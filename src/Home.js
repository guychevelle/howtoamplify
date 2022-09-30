import React from 'react';
import { useState } from 'react';
import { HowToProcess, HowToProcessCollection } from './ui-components';
import { HowToStepsCollection } from './ui-components';

import { API } from 'aws-amplify';
import * as queries from './graphql/queries';

export default (props) => {

  console.log('home props', props);

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

  function setSteps (data) {
    console.log('set steps data', data);
    updateSteps(data.listSteps.items);
  }

  function handleGetStepsError (error) {
    console.log('handle error', error);
    if (error.data)
      updateSteps(error.data.listSteps.items);
  }

  async function getSteps() {
    //  need to differentiate authenticated vs non-authenticated users
    console.log('in getSteps()');
    const authmode = props.userInfo ? "AMAZON_COGNITO_USER_POOLS" :
                                      "AWS_IAM";
    const allSteps = await API.graphql({ query: queries.listSteps,
                                         authMode: authmode })
                     .then((response) => setSteps(response.data))
                     .catch((error) => handleGetStepsError(error));
  }

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
        <ul>
          <li key="1">dummy list item</li>
          {steps ? steps.map((step, index) => (
                             <li key={step.id}>{step.name}</li>
                            )) :
                   ""}
        </ul>
      </div>
    </div>
  );
};

/*
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
          {steps ? steps.map((step, index) => (
                             <li key={step.id}>{step.name}</li>
                            )) :
                   ""}
*/
