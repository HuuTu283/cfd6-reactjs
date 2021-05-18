import TabInfo from "./components/TabInfo"
import TabCoin from "./components/TabCoin"
import TabCourse from "./components/TabCourse"
import TabCourseDone from "./components/TabCourseDone"
import TabPayment from "./components/TabPayment"

import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import useAuth from '../../hook/useAuth';
import TopInfo from './components/TopInfo';


export default function Profile() {
    let { path } = useRouteMatch()

    // let { login } = useAuth()

    // if (!login) return <Redirect path="/" />


    return (
        <main className="profile" id="main">
            <section>
                <TopInfo />
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink exact to={`${path}`} >Thông tin tài khoản</NavLink>
                            <NavLink to={`${path}/khoa-hoc-cua-ban`} >Khóa học của bạn</NavLink>
                            <NavLink to={`${path}/du-an`} >Dự án đã làm</NavLink>
                            <NavLink to={`${path}/thanh-toan`} >Lịch sử thanh toán</NavLink>
                            <NavLink to={`${path}/coin`} >Quản lý COIN của tôi</NavLink>
                        </div>

                        <div className="tab-content">
                            <Switch>
                                <Route exact path={`${path}`} component={TabInfo} />
                                <Route path={`${path}/khoa-hoc-cua-ban`} component={TabCourse} />
                                <Route path={`${path}/du-an`} component={TabCourseDone} />
                                <Route path={`${path}/coin`} component={TabCoin} />
                                <Route path={`${path}/thanh-toan`} component={TabPayment} />
                            </Switch>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
