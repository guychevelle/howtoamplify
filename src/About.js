import React from 'react';
import { useState } from 'react';
// CopyBlock shows code, but incudes a 'copy' icon to copy to clipboard
import { CodeBlock, CopyBlock, github } from 'react-code-blocks';
import { Storage } from 'aws-amplify';

export default () => {

  const [count, updateCount] = useState(0);
  const [name, updateName] = useState('');

  const reactcode = "import React from 'react';\r\nexport default () => {\r\n  return (\r\n    <div>\r\n      hello\r\n    </div>\r\n  );\r\n}";
  const bashcode = "#!/bin/bash\r\n\r\nnow=`/bin/date +%Y%m%d%H%M%S`\r\n\r\necho starting at $now\r\n\r\nexit 0";

  function buttonClicked() {
    updateCount(count+1);
    updateName('debra'+count);
    console.log('button clicked');
    console.log('count', count);
  }

  const [s3code, updateS3Code] = useState('');

  async function getCode() {
    const result = await Storage.get('index.js',
                                      {level: 'public',
                                       contentType: 'text/html',
                                       download: true
                                      });
    result.Body.text().then(data => {
      //console.log('content', data);
      updateS3Code(data);
    });
  }

  getCode();

  return (
    <div>
      <h2>About component</h2>
      you clicked {count} times
      name is {name}
      <button onClick={buttonClicked}>click me</button>
      <CodeBlock
        text={s3code}
        language={'javascript'}
        showLineNumbers={true}
        theme={github}
      />
      <p></p>
      <div className="codediv">
        <CopyBlock
          text={bashcode}
          language={'bash'}
          showLineNumbers={true}
          wrapLines
          theme={github}
        />
      </div>
    </div>
  );
};

