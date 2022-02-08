import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { setUsers } from './../store/store.user'
import Home from './components/home/Home'
import Users from './components/users/Users'
import Header from './components/header/Header'
import UserForm from './components/users-form/UserForm'
import UserService from './services/user.service'
import './App.css'

function App() {
  const routes = [
    { id: 1, navmenu: true, q: '', text: 'Users', path: '/users', icon: faUser },
    { id: 2, navmenu: true, q: '', text: 'Home', path: '/', icon: faHome }
  ];

  const userService = new UserService();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  //Start All Users
  useEffect(() => {
    var p = userService.getAllUsers();
    p.then(users => dispatch(setUsers(users)));
  }, [])

  return (
    <div className="App">
      <Header title="Sample User Register" routes={routes}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/userform" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;