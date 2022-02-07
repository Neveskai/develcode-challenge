import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

function App() {
  const routes = [
    { id: 1, navmenu: true, q: '', text: 'About', path: '/about', icon: faUser },
    { id: 2, navmenu: true, q: '', text: 'Home', path: '/', icon: faHome }
  ];
  return (
    <div className="App">
      <Header title="Jobs Admin" routes={routes}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;