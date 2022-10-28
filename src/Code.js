import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Storage } from 'aws-amplify';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { colorBrewer } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
                                       contentType: 'string',
                                       download: true
                                      });
    result.Body.text().then(data => {
      console.log('file content', data);
      updateS3Code(data);
    });
  }

  if (!s3code)
    getCode();

  const divstyles = props.screenWidth < 700 ?
          {width: "350px", height: "400px", fontSize: "10px",
           alignItems: "center", justifyContent: "center",
           margin: "auto"} :
          {width: "80%", alignItems: "center", justifyContent: "center",
           margin: "auto"}

  return (
    <div>
      <p />
      <h3><center>Code for the '{props.stepItem.name}' step</center></h3>
      <p />
      <div style={divstyles}>
        <SyntaxHighlighter
          language="javascript"
          wrapLines={true}
          showLineNumbers={true}
          style={colorBrewer}>
          {s3code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
