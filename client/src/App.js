import React from 'react';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Home from './pages/Home.js';


function App(){
    return(
        <div>
           <BrowserRouter>
             <Routes>
                  <Route path='/' exact Component={Home}></Route>
                  <Route path='/login' exact Component={Login}></Route>
                  <Route path='/register' exact Component={Register}></Route>
             </Routes>
           </BrowserRouter>
        </div>
    );
}

export default App;