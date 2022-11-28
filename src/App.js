// import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import './App.scss';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ContactUs from './pages/ContactUs';
import TermsOfUse from './pages/terms';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Register from './pages/Register';
import TakeQuiz from './pages/TakeQuiz';
import LiveQuizReview from './pages/LiveQuizReview';




//app component
function App() {
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
          <Route  path ='/dashboard'  element={<Dashboard data={data} setData={setData} isStudent={false} />} />
          <Route  path ='/signUp'  element={<Register data={data} setData={setData} />} />
          <Route  path ='/takeQuiz'  element={<TakeQuiz data={data} setData={setData} />} />
          <Route  path ='/liveQuizReview'  element={<LiveQuizReview data={data} setData={setData} />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
