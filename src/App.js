import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Contacts from './components/Contacts';
import userData from './data/user';

const App = () => {
  const [user, setUser] = useState({});
  const [inital, setInital] = useState()

  useEffect(() => {
    setUser(userData)
    // retrives first letter from first_name and sets it to initial state
    setInital(userData.first_name[0])
  }, [])

  return (
    <Router>
      <div className='App'>
        <Nav inital={inital}/>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </Router>
  );
}

export default App;
