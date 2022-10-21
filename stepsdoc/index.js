import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

import App from './App';
import reportWebVitals from './reportWebVitals';

//  AWS Amplify related
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AmplifyProvider>
      <Authenticator>
        {({ user }) => (
          <main>
            Hello {user.username}
          </main>
        )}
      </Authenticator>
  </AmplifyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();