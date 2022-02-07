import './App.css'
import { Routes, Route } from "react-router-dom"
import { useSelector } from 'react-redux'
import Home from "./components/home/Home"
import Users from "./components/users/Users"
import UserForm from "./components/users-form/UserForm"
import Header from './components/header/Header'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

function App() {
  const routes = [
    { id: 1, navmenu: true, q: '', text: 'Users', path: '/users', icon: faUser },
    { id: 2, navmenu: true, q: '', text: 'Home', path: '/', icon: faHome }
  ];
  const users = useSelector((state) => state.users.users);
  return (
    <div className="App">
      <Header title="Sample User Register" routes={routes}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/newuser" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;