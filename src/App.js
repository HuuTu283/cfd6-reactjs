import React from 'react';
import './assets/style/custom.scss'
import Home from './pages/home';
import Team from './pages/team';
import { Header, Footer } from './components/'
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

import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/team" component={Team} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/du-an" component={Project} />
                    <Route path="/lien-he" component={Cooperate} />
                    <Route path="/dang-ky" component={Register} />
                    <Route path="/email" component={Email} />
                    <Route path="/coin" component={Coin} />
                    <Route path="/thanh-toan" component={Payment} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/khoa-hoc/:slug" component={CourseDetail} />
                    <Route path="/khoa-hoc" component={Course} />
                    <Route component={Error} />
                </Switch>
                <Footer />
            </BrowserRouter>

        </div>
    );
}

export default App;
