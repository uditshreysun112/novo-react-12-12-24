import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';
// import { Contact } from './Contact';
import { About } from './About';
import { Team } from './Team';
import { Services } from './Services';
// import { News } from './News';
// import { Fq } from './F&q';
// import { All_courses } from './All_courses';
// import { Industry } from './Industry';
// import { Team } from './Team';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
// import { Std_login } from './std/std_login';
// import { Registeration } from './std/Registeration';
// import { Forgetpass } from './std/Forgetpass';
// import { Diplomas } from './Diplomas';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='about' element={<About />}></Route>
        <Route exact path='team' element={<Team />}></Route>
        <Route exact path='services' element={<Services />}></Route>
        {/* <Route exact path='contact' element={<Contact />}></Route>
        <Route exact path='news' element={<News />}></Route>
        <Route exact path='F&q' element={<Fq />}></Route>
        <Route exact path='all_courses' element={<All_courses />}></Route>
        <Route exact path='diplomas' element={<Diplomas />}></Route>
        <Route exact path='industry' element={<Industry />}></Route>
        <Route exact path='team' element={<Team />}></Route>
        <Route exact path='/std/std_login' element={<Std_login />}></Route>
        <Route exact path='/registeration' element={<Registeration />}></Route>
        <Route exact path='/forgetpass' element={<Forgetpass />}></Route> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App

