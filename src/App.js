import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Admin from './components/Admin/Admin';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/admin-login" component={AdminLogin} />
      <Route path="/admin" component={Admin} />
    </Router>
  );
}

export default App;
