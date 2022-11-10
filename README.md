Generous Frontend

This is the frontend repository for the Generous app. It contains the code necessary for the client to view the app. It was designed to work with the app's backend repository. To use the entire app, visit the Generous site.

Contents

About
Installation
Explanation
User Stories
Features
Dependencies
Designs
Views
Code Examples
Stretch Goals
About

Generous is an app for searching up for all your favorite comuunity service organizations. It was made through the collaborative efforts of Tanner Eschmann, Connor Cappello, Nainoa Villegas, and Krishna Chandrabhatta.

Installation

Create Local Repositories

Fork and clone this repository and the corresponding backend repository to your local computer (we recommend storing both directories in a common Generous folder)
Run npm i to install all necessary dependencies
Set up a .env file to hold the REACT_APP_SERVER_URL and REACT_APP_NUMBEO_API_KEY variables 
Set Up Local Database

Ensure you have MongoDB installed on your local computer by typing mongo into your terminal to launch the Mongo shell (install MongoDB if necessary)
Upon running the backend repo (see next step), a new database named generous should automatically appear in your local MongoDB (confirm by typing show dbs while in the Mongo shell)
Run Locally

Run npm start from within both the backend directory and the frontend directory
View the live version of the site at http://localhost:3000 in the browser of your choosing
Alternatively, you may use the live version of the Generous app.

Explanation

We decided to create an app where users will be able to find different community service organizations using the Every API. The goal of the app is for users to be able to create their own accounts. They can search for the community service organizations they are intersted in participating in. Users would be able to save those organizations in the own list for future use. 

User Stories

As a potential user, I want to sign up for Generous, so I can use the service.
As a user, I want the ability to log in, so I can securely access my data.
As a user, I want to log out of the application, so I can keep my information secure.
As a new user, I want to enter my financial data, so I can donate money.
As a user, I want to see my saved organizations.
As a user, I want to be able to search for any organization I want.
As a user, I want to easily navigate the application, so I can easily use it.
As a user, I want to see my name displayed user's when I am logged in, so I can know I am logged in.


Features

Forms for signing up and logging in users
Forms for searching for organizations
Views for a homepage and about page
location

Dependencies

@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
axios
dotenv
jwt-decode
react
react-alert
react-alert-template-basic
react-dom
react-router-dom
react-scripts
react-transition-group
recharts
web-vitals

EVERY API

https://www.every.org/developer


# Setup

Due to this project using an older package not fully supported on node17+ we'll need to run one initial command before we run our npm install. 

If you are on mac or linux, run the following command:

```
export NODE_OPTIONS=--openssl-legacy-provider
```

for windows users use one of these two commands:

command prompt: 

```
set NODE_OPTIONS=--openssl-legacy-provider
```

powershell:

```
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

# MERN Authentication Frontend

| Components | Links to Code | Description |
| --- | --- | --- |
| `App`| [`App`](https://github.com/romebell/mern-auth-frontend#app-component) | The component that manages the entire app |
| `Signup`| [`Signup`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/signup.md) | Allow the user to signup |
| `Login`| [`Login`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/login.md) | Allows the user to login to the app |
| `Navbar`| [`Navbar`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/navbar.md) | Make `App` class component |
| `Profile`| [`Profile`](#) | A component that displays the user profile information |
| `setAuthToken`| [`setAuthToken`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/setAuthToken.md) | A utility function that adds a token to the `Authentication` header to manage current user |
| `About`| [`About`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/other-components.md#about) | A component that decribes the app |
| `Footer`| [`Footer`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/other-components.md#footer) | A footer that goes on each component |
| `Welcome`| [`Welcome`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/other-components.md#welcome) | A welcome page for the user |

### `App Component`

### Imports for `App`

```jsx
// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
```

### `useState` inside `App`

```jsx
function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
}
```

### `PrivateRoute`

```jsx
const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login"/>
  }} />
}
```

### `useEffect` inside `App`

```jsx
useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);
```

### `nowCurrentUser`

```jsx
const nowCurrentUser = (userData) => {
    console.log('===> nowCurrent is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
}
```

### `handleLogout`

```jsx
const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
        // remove token for localStorage
        localStorage.removeItem('jwtToken');
        setCurrentUser(null);
        setIsAuthenticated(false);
    }
}
```

### `return` of `App`

```jsx
return (
<div className="App">
    <h1>MERN Authentication</h1>
    <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
    <div className="container mt-5">
        <Switch>
            <Route path='/signup' component={Signup} />
            <Route 
            path="/login"
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>}
            />
            <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
        </Switch>
    </div>
    <Footer />
</div>
);
```

### Finished

```jsx
// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Welcome from './components/Welcome';

const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login"/>
  }} />
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

 
  useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('===> nowCurrent is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container mt-5">
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route 
            path="/login"
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>}
          />
          <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
```
