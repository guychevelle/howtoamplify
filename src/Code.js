import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CopyBlock, github } from 'react-code-blocks';
import { Storage } from 'aws-amplify';

export default (props) => {

  console.log('code and step', props.stepItem);

  const [s3code, updateS3Code] = useState(null);

  let navigate = useNavigate();
  if (!props.stepItem) {
    navigate("/");
    return;
  }

  useEffect(() => {
    console.log('Code running useEffect');
  }, [s3code]);


  async function getCode() {
    const result = await Storage.get(props.stepItem.code.codetextkey,
                                      {level: 'public',
                                       contentType: 'text/javascript',
                                       download: true
                                      });
    result.Body.text().then(data => {
      console.log('file content', data);
      updateS3Code(data);
    });
  }

  if (!s3code)
    getCode();

  return (
    <div className="codediv">
      <p />
      <h2><center>Code for the '{props.stepItem.name}' step</center></h2>
      <p />
        <CopyBlock
          text={s3code}
          language={'javascript'}
          wrapLines
          theme={github}
        />
    </div>
  );
};
/*
*/
