import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import PrivateFriends from './components/PrivateFriends'
import Login from './components/Login'
import './App.css';

function App() {

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/public">Public Friends</Link>
            </li>
            <li>
              <Link to="/private">Private Friends</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/private" component={PrivateFriends} />
        </div>
      </Router>
    );
}

export default App;
