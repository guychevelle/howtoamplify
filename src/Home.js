import React from 'react';
import { useState } from 'react';
import { HowToProcess, HowToProcessCollection } from './ui-components';
import { HowToStepsCollection } from './ui-components';

import { API } from 'aws-amplify';
import * as queries from './graphql/queries';

export default () => {

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

  async function getSteps() {
    const allSteps = await API.graphql({ query: queries.listSteps })
                     .then((response) => console.log('response', response.data))
                     .catch(error => null);
    console.log('allSteps', allSteps);
    if (allSteps) {
      updateSteps(allSteps.data.listSteps.items);
      console.log('steps', steps);
    }
  }

  if (!steps)
    getSteps();

  return (
    <div>
      <p />
      <h2>Home Page</h2>
      <p />
      <div>
        <ul>
          <li key="1">dummy list item</li>
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
