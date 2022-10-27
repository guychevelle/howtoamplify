import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Storage } from 'aws-amplify';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { colorBrewer } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default (props) => {

  console.log('code and step', props.stepItem);

  const [s3code, updateS3Code] = useState(null);
  const [codearray, updateCodeArray] = useState(null);

  let navigate = useNavigate();
  if (!props.stepItem) {
    navigate("/");
    return;
  }

  useEffect(() => {
    console.log('Code running useEffect');    
    //console.log('length of code array', codearray.length);
    console.log('code array', codearray);
  }, [codearray]);


  async function getCode() {
    const result = await Storage.get(props.stepItem.code.codetextkey,
                                      {level: 'public',
                                       contentType: 'string',
                                       download: true
                                      });
    result.Body.text().then(data => {
      console.log('file content', data);
      updateS3Code(data);
      updateCodeArray(data.split('\n'));
    });
  }

  if (!s3code)
    getCode();


  return (
    <div>
      <p />
      <h2><center>Code for the '{props.stepItem.name}' step</center></h2>
      <p />
      <div className="codediv">
        <SyntaxHighlighter
          language="javascript"
          wrapLines={true}
          showLineNumbers={true}
          style={colorBrewer}>
          {s3code}
        </SyntaxHighlighter>
      </div>
      post map
    </div>
  );
};
/*
      <CodeBlock overrides={codeblockoverrides} />
      <p />
         {processes ? processes.map((process, index) => (
                                    <li key={process.id}>{process.name}</li>
                                    )) :
                       ""}

        <CopyBlock
          text={s3code}
          language={'javascript'}
          wrapLines
          codeBlock={false}
          theme={github}
        />
      <div className="codediv">
        <CopyBlock
          text={bashcode}
          language={'bash'}
          showLineNumbers={true}
          wrapLines
          codeBlock={false}
          theme={github}
          style={blockstyles}
        />

*/
