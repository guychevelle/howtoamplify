import React from 'react';
import { useState } from 'react';
import { API } from 'aws-amplify';
import { Text } from '@aws-amplify/ui-react';
import { HowToStepsCollection } from './ui-components';
import * as queries from './graphql/queries';

export default (props) => {

  console.log('steps for', props.processItem);

  const [steps, updateSteps] = useState(null);

  const authmode = props.userInfo ? "AMAZON_COGNITO_USER_POOLS" :
                                    "AWS_IAM";

  function setProcessSteps(data) {
    console.log('setprocess steps data', data);
    // don' know what order steps will be returned, sort stepnum ascending
    updateSteps(data.listSteps.items.sort((a, b) => { return a.stepnum - b.stepnum } ));
  }

  function handleGetProcessStepsError(error) {
    console.log('handleGetProcessStepsError', error);
  }

  //  get specific Steps based on selection of a Process in the UI
  async function getProcessSteps(processid) {
    console.log('getting steps for process id', props.processItem.id);
    const filter = { processStepsId: { eq: props.processItem.id }};
    const processSteps = await API.graphql({ query: queries.listSteps,
                                             variables: { filter: filter},
                                             authMode: authmode })
                         .then((response) => setProcessSteps(response.data))
                         .catch((error) => handleGetProcessStepsError(error));
  }

  function clickedStep (item) {
    console.log('clicked step', item);
  }

  if (!steps)
    getProcessSteps(props.processItem.id);

  const stepCollectionOverrides = props.screenWidth < 700
    ? {
       "HowToStepsCollection": {
         type: "list"
       }
      }
    : {
       "HowToStepsCollection": {
         type: "grid",
         templateColumns: "1fr 1fr"
       }
      }
  
  return (
    <div>
      <p />
      <h2><center>Steps</center></h2>
      <p />
      Process: {props.processItem.name}
      <p />
      Description: {props.processItem.description}
      <p />
      {steps ? <HowToStepsCollection
                     items={steps}
                     overrides={stepCollectionOverrides}
                     overrideItems={({ item, index }) => ({
                       onClick: () => clickedStep(item),
                       width: '350px',
                       overrides: { TextAreaField: {
                                      rows: '10',
                                      label: (
                                        <Text fontWeight="bold"
                                              fontSize={12}
                                              fontFamily="inter">
                                          Step Actions
                                        </Text>
                                      )
                                    }
                                  }
                   })} /> :
                   'Process not selected'}
    </div>
  );
};
