import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

export default () => {
  return (
    <div>
      <p />
      <h2>Login</h2>
      <p />
      <Authenticator>
        {({ user }) => (
          <main>
            Hello {user.username}
          </main>
        )}
      </Authenticator>
    </div>
  );
};
/*
            <button onClick={signOut}>sign out</button>
*/
