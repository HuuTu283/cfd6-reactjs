import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/style/custom.scss'
import { Header, Footer } from './components/'
import PopupLogin from './components/PopupLogin';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/home';
import Team from './pages/team';
import Project from './pages/project';
import Course from './pages/course';
import CourseDetail from './pages/course-detail';
import Faq from './pages/faq';
import Payment from './pages/payment';
import Coin from './pages/coin';
import Email from './pages/email';
import Error from './pages/error';
import Register from './pages/register';
import Contact from './pages/cooperate';
import Profile from './pages/profile';
import CountDown from './pages/count';


import Auth from './service/auth';



export let Context = React.createContext({})




function App() {


    const [state, setState] = useState({
        login: JSON.stringify(localStorage.getItem('login'))
    })

    useEffect(() => {
        localStorage.setItem('login', JSON.stringify(state.login))
    }, [state.login])

    // Trong xu li API thi dung JSON de truyen du lieu giua FE va BE - JSON la 1 object voi du lieu ben trong la kieu du lieu nguyen thuy - k truyen duoc function, 1 so object dac biet nhu: new FormDaTa.v.v..
    async function handleLogin(username, password) {
        //fetch la xu li API lq den BE - la bat dong bo - tra ve 1 promise (tham so dau tien la link goi API, tham so t2 la cac option cua request)
        try {
            let res = await Auth.login({ username, password })
            // res = await res.json()
            if (res.data) {
                setState({
                    ...state,
                    login: res.data // set lai login
                })
                return {
                    success: true,
                }
            } else if (res.error) {
                setState({
                    ...state,
                    loginError: res.error // set lai login
                })
                return {
                    error: res.error
                }
            }
        } catch (error) {

        }


        // .then((response) => {
        //     console.log(response)
        //     return response.json() // json tra ve 1 cai promise nen minh duoc then tiep phia duoi
        // })
        // .then((res) => { //res nay la cai duoc return ve (response.json()) tu cai then phia truoc
        //     if (res.data) {
        //         setState({
        //             ...state,
        //             login: res.data // set lai login
        //         })
        //     } else if (res.error) {
        //         setState({
        //             ...state,
        //             loginError: res.error // set lai login
        //         })
        //     }

        // })
        // .catch((error) => { // dung de bat loi khi dang nhap fail

        // })






        // if (username === 'admin@gmail.com' && password === '12345678') {
        //     setState({
        //         ...state,
        //         login: {
        //             name: 'admin',
        //             avatar: '/img/tes.jpg'
        //         }
        //     })

        //     // localStorage.setItem('login', JSON.stringify({
        //     //     name: 'admin',
        //     //     avatar: '/img/tes.jpg'
        //     // }))
        // }
        // else {
        //     return 'sai'
        // }
    }
    function handleLogout() {
        setState({
            ...state,
            login: false
        })

        // localStorage.setItem('login', false)
    }


    return (
        <div className="App">
            <Context.Provider value={{ ...state, handleLogin, handleLogout }}>
                <BrowserRouter>
                    <Header />
                    <PopupLogin />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/team" component={Team} />
                        <PrivateRoute path="/thong-tin-ca-nhan" component={Profile} />
                        <Route path="/du-an" component={Project} />
                        <Route path="/lien-he" component={Contact} />
                        <Route path="/dang-ky" component={Register} />
                        <Route path="/email" component={Email} />
                        <Route path="/coin" component={Coin} />
                        <Route path="/thanh-toan" component={Payment} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/count-down" component={CountDown} />
                        <Route path="/khoa-hoc/:slug" component={CourseDetail} />
                        <Route path="/khoa-hoc" component={Course} />
                        <Route component={Error} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </Context.Provider>

        </div>
    );
}

export default App;
