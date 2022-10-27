import React from 'react';
import { useState } from 'react';

export default () => {

  const [count, updateCount] = useState(0);
  const [name, updateName] = useState('');

  function buttonClicked() {
    updateCount(count+1);
    updateName('debra'+count);
    console.log('button clicked');
    console.log('count', count);
  }

  return (
    <div>
      <h2>About component</h2>
      you clicked {count} times
      name is {name}
      <button onClick={buttonClicked}>click me</button>
      <p></p>
    </div>
  );
};

/*
      <CodeBlock
        text={s3code}
        language={'javascript'}
        showLineNumbers={true}
        theme={github}
        style={blockstyles}
      />
*/
