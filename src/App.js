// import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import './App.scss';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ContactUs from './pages/ContactUs';
import TermsOfUse from './pages/terms';
import Login from './pages/login';





//app component
function App() {
// const [counter, setCounter] = useState(0);
const [data, setData] = useState([]);
  return (
    <div className="App"> 
    <Router>
      <Header data={data}/>
      <div className='page-container'>
        <Routes>
        <Route  path ='/' element={<Login data={data} setData={setData}/>} />
          <Route  path ='/terms' element={<TermsOfUse data={data} setData={setData}/>} />
          <Route  path ='/ContactUs' element={<ContactUs />} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
