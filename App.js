import React from 'react';
import logo from './logo.svg';
import './App.css';
import myImage from "./imageInSrc.png";
import './style.css';
import Cont from './Container';
import Wrapper from './wrapper';
import Profile from './Profile';
import myImage1 from "./profile.png";
import DidMount from "./DidMount";
import ImprovedButton from "./ImprovedButton";
import ToDoList from './ToDoList';
import { BrowserRouter, Route } from "react-router-dom";
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Navbar from './navbar';

function App() {
  



  return (


    <BrowserRouter>
      <div>
        <Navbar />
        <Route path="/page1" exact component={Page1} />
        <Route path="/page2" exact component={Page2} />
        <Route path="/page3" exact component={Page3} />

      </div>

    </BrowserRouter>


  );
}

export default App;

