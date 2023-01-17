import React, {useCallback, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavbarElement from './components/navbar';
//import Carousel, {CarouselItem} from './components/projectSlide';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <div id='home'></div>
    <div style={{height: 0, overflow: 'auto' }}>
    <NavbarElement />
    </div>
    <App/>
    <div className='ending'></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
