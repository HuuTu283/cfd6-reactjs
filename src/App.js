import React from 'react';
import './assets/style/custom.scss'
import Home from './pages/home';
import Team from './pages/team';
import { Header, Footer, Nav, Overlay } from './components/'
import Project from './pages/project';
import Course from './pages/course';
import CourseDetail from './pages/course-detail';
import Faq from './pages/faq';
import Payment from './pages/payment';
import Coin from './pages/coin';
import Email from './pages/email';
import Error from './pages/error';
import Register from './pages/register';
import Cooperate from './pages/cooperate';
import Profile from './pages/profile';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Overlay />

      {/* <Course /> */}
      {/* <CourseDetail /> */}
      {/* <Faq /> */}
      {/* <Payment /> */}
      {/* <Coin /> */}
      {/* <Email /> */}
      {/* <Error /> */}
      <Register />
      {/* <Cooperate /> */}
      {/* <Project /> */}
      {/* <Profile /> */}
      {/* <Home /> */}
      {/* <Team /> */}

      <Footer />


    </div>
  );
}

export default App;
