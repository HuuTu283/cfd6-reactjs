import { useState } from "react"



import TabInfo from "./components/TabInfo"
import TabCoin from "./components/TabCoin"
import TabCourse from "./components/TabCourse"
import TabCourseDone from "./components/TabCourseDone"
import TabPayment from "./components/TabPayment"


export default function Profile() {
    let [tab, setTab] = useState(0)
    function SetTab(e, index) {
        e.preventDefault();
        setTab(index);
    }
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
                            <a href="#" className={tab === 0 ? "active" : ""} onClick={(e) => SetTab(e, 0)}>Thông tin tài khoản</a>
                            <a href="#" className={tab === 1 ? "active" : ""} onClick={(e) => SetTab(e, 1)}>Khóa học của bạn</a>
                            <a href="#" className={tab === 2 ? "active" : ""} onClick={(e) => SetTab(e, 2)}>Dự án đã làm</a>
                            <a href="#" className={tab === 3 ? "active" : ""} onClick={(e) => SetTab(e, 3)}>Lịch sử thanh toán</a>
                            <a href="#" className={tab === 4 ? "active" : ""} onClick={(e) => SetTab(e, 4)}>Quản lý COIN của tôi</a>
                        </div>



                        <div className="tab-content">
                            {
                                tab === 0 ? <TabInfo /> :
                                    tab === 1 ? <TabCourse /> :
                                        tab === 2 ? <TabCourseDone /> :
                                            tab === 3 ? <TabPayment /> :
                                                <TabCoin />

                            }

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
