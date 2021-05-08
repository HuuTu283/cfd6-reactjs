import { useState } from "react"



import TabInfo from "./components/TabInfo"
import TabCoin from "./components/TabCoin"
import TabCourse from "./components/TabCourse"
import TabCourseDone from "./components/TabCourseDone"
import TabPayment from "./components/TabPayment"

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

export default function Profile() {
    let { path } = useRouteMatch()



    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        <img src="img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink exact to={`${path}`} >Thông tin tài khoản</NavLink>
                            <NavLink to={`${path}/khoa-hoc-cua-ban`} >Khóa học của bạn</NavLink>
                            <NavLink to={`${path}/du-an`} >Dự án đã làm</NavLink>
                            <NavLink to={`${path}/payment`} >Lịch sử thanh toán</NavLink>
                            <NavLink to={`${path}/coin`} >Quản lý COIN của tôi</NavLink>
                        </div>

                        <div className="tab-content">
                            <Switch>
                                <Route exact path={`${path}`} component={TabInfo} />
                                <Route path={`${path}/khoa-hoc-cua-ban`} component={TabCourse} />
                                <Route path={`${path}/du-an`} component={TabCourseDone} />
                                <Route path={`${path}/coin`} component={TabCoin} />
                                <Route path={`${path}/payment`} component={TabPayment} />
                            </Switch>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
