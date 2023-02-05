import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import App from './App';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Servicess from './Component/Servicess';
import Contact from './Component/Contact';
import Carieer from './Component/Carieer';
import Blog from './Component/Blog';
import Sign from './Component/Sign';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
<Routes>
<Route Exact path='/'element={<App/>}/>
<Route path='/navbar'element={<Navbar/>}/>
<Route path='/home'element={<Home/>}/>
<Route path='/about'element={<About/>}/>
<Route path='/servicess'element={<Servicess/>}/>
<Route path='/contact'element={<Contact/>}/>
<Route path='/carieer'element={<Carieer/>}/>
<Route path='/blog'element={<Blog/>}/>
<Route path='/sign'element={<Sign/>}/>
</Routes>
</Router>
);



