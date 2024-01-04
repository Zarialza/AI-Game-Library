import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import {StrictMode} from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import History from './pages/History';
import UserDetail from './pages/UserDetail';
import Tictactoe from './pages/TicTacToe';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Cheakers from './pages/Cheakers';
import Chess from './pages/Chess';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Land" element={<Landing />} />
        <Route path="/history" element={<History />} />
        <Route path="/details" element={<UserDetail />} />
        <Route path="/gameWindow/TicTacToe" element={<Tictactoe />} />
        <Route path="/gameWindow/Chess" element={<Chess />} />
        <Route path="/gameWindow/Cheakers" element={<Cheakers />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  )


reportWebVitals();
