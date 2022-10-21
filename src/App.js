import './App.css';
import './howtoamplify.css';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Auth, Hub } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

import Navbarmenu from './Navbarmenu';

//  router
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// routed content
import Home from './Home';
import Steps from './Steps';
import Load from './Load';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import About from './About';



function App() {

  //  window size related functionality
  //  from https://bobbyhadz.com/blog/react-get-window-width-height
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  //  do the below 2 lines consider a user is logged out just because
  //  the browser is refreshed, but they may still be logged in to
  //  cognito??
  const [user, updateUser] = useState(null);
  const [loggedin, updateLoggedIn] = useState(false);
  const [authactioncount, updateAuthActionCount] = useState(0);

  // we need to track the Process item selected in the Home page
  // so we can send Process data to the Steps page so that Steps
  // table data can be queried. The update function will be passed
  // to the Home function so it can set the value
  const [selectedprocessitem, updateSelectedProcessItem] = useState(null);

  // add authactioncount as the 2nd arg to useEffect() to create
  // a dependency.  whenever authactioncount changes, useEffect()
  // will be triggered to run and cause the page to be re-rendered
  // (normally not done when using react-router-dom)
  useEffect(() => {
    console.log('running useEffect');
    checkUser();
    setAuthListener();

    //  set page <head> meta data
    document.title = "Gallery: How to Amplify";
    document.querySelector('meta[name="description"]').setAttribute("content", "Application demonstrating authentication, database, and storage usage in Amplify");
    document.querySelector('meta[name="keywords"]').setAttribute("content", "react gallery template applications");

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

    console.log('authactioncount=', authactioncount);
  }, [authactioncount]);

  async function checkUser() {
    try {
      console.log('checkUser');
      const user = await Auth.currentAuthenticatedUser();
      console.log('checked user ', user);
      updateUser(user);
      if (user == null)
        updateLoggedIn(false);
    } catch (err) {
      // updateUser(null);
    }
  }

  async function setAuthListener() {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          console.log('user signed in');
          console.log(data.payload);
          updateLoggedIn(true);
          updateUser(data.payload.data);
          updateAuthActionCount(authactioncount+1);
          break;
        case 'signUp':
          console.log('user signed up');
          updateAuthActionCount(authactioncount+1);
          break;
        case 'signOut':
          console.log('data from event:', data);
          updateLoggedIn(false);
          updateUser(null);
          updateAuthActionCount(authactioncount+1);
          break;
        case 'signIn_failure':
          console.log('user sign in failed');
          updateAuthActionCount(authactioncount+1);
          break;
        case 'configured':
          console.log('the Auth module is configured');
          updateAuthActionCount(authactioncount+1);
        default:
          break;
      }
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbarmenu isLoggedIn={loggedin} userData={user} />
        </div>
        <header>
        </header>
        <div className="collectiondiv"  margin="25px">
          <Routes>
            <Route path="/" element={<Home userInfo={user} 
                                           screenWidth={windowSize.innerWidth}
                                           updateItem={updateSelectedProcessItem} /> } />
            <Route path="/steps" element={<Steps userInfo={user}
                                                 screenWidth={windowSize.innerWidth}
                                                 processItem={selectedprocessitem} />} />
            <Route path="/about" element={<About />} />
            <Route path="/load" element={<Load />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile 
                                             userInfo={user}
                                             userCheck={checkUser}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

