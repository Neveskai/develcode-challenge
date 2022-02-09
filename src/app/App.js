import React from 'react';
import { Routes, Route } from "react-router-dom"
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import Home from './components/home/Home'
import Users from './components/users/Users'
import Header from './components/header/Header'
import UserForm from './components/users-form/UserForm'
import './App.css'

function App() {
  const routes = [
    { id: 1, navmenu: true, q: '', text: 'Users', path: '/users', icon: faUser },
    { id: 2, navmenu: true, q: '', text: 'Home', path: '/', icon: faHome }
  ];

  return (
    <div className="App">
      <Header title="Sample User Register" routes={routes}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/useredit" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;