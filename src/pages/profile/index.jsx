import { Input } from "../../components"
import CoinCheck from "./components/CoinCheck"
import CoinHistory from "./components/CoinHistory"
import Course from "./components/Course"
import CourseDone from "./components/CourseDone"
import PaymentHistory from "./components/PaymentHistory"


export default function Profile() {
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
                            <a href="#" className="active">Thông tin tài khoản</a>
                            <a href="#">Khóa học của bạn</a>
                            <a href="#">Dự án đã làm</a>
                            <a href="#">Lịch sử thanh toán</a>
                            <a href="#">Quản lý COIN của tôi</a>
                        </div>



                        <div className="tab-content">
                            <div className="tab1" style={{ display: 'none' }}>
                                <Input
                                    title="Họ và tên"
                                    type="text"
                                    value="Nguyễn Văn A"
                                />
                                <Input
                                    title="Số điện thoại"
                                    type="text"
                                    value="0949******"
                                />

                                <label>
                                    <p>Email<span>*</span></p>
                                    <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
                                </label>

                                <Input
                                    title="Facebook"
                                    type="text"
                                    value="Facebook url"
                                />
                                <Input
                                    title="Skype"
                                    type="text"
                                    value="Skype url"
                                />

                                <div className="btn main rect">LƯU LẠI</div>
                            </div>


                            <div className="tab2" style={{ display: 'none' }}>
                                <Course
                                    img="img/img6.png"
                                    name="Front-End Căn Bản"
                                    date="09/09/2019"
                                />
                                <Course
                                    img="img/img7.png"
                                    name="Front-End Nâng Cao"
                                    date="09/09/2019"
                                />
                            </div>



                            <div className="tab3" style={{ display: 'none' }}>
                                <div className="row">

                                    <CourseDone
                                        title="Furnitown"
                                        description="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                                        image="img/img8.png"
                                        ava_teacher="img/Intersect (1).png"
                                        name_teacher="Trần Nghĩa"
                                    />

                                    <CourseDone
                                        title="GboxMB"
                                        description="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                                        image="img/img8.png"
                                        ava_teacher="img/Intersect (1).png"
                                        name_teacher="Trần Nghĩa"
                                    />
                                </div>
                                <div className="btn-wrap">
                                    <div className="btn overlay btn-icon round">
                                        <img src="img/icon-upload.svg" alt="" /> Tải lên
          </div>
                                </div>
                            </div>




                            <div className="tab4" style={{ display: 'none' }}>
                                <PaymentHistory
                                    name="Khóa học CFD1-offline"
                                    date="09/09/2020"
                                    money="1.500.000 VND"
                                />
                                <PaymentHistory
                                    name="Khóa học CFD1-offline"
                                    date="19/09/2020"
                                    money="1.500.000 VND"
                                />
                                <PaymentHistory
                                    name="Khóa học CFD1-offline"
                                    date="19/09/2020"
                                    money="1.500.000 VND"
                                />
                                <PaymentHistory
                                    name="Khóa học CFD1-offline"
                                    date="19/09/2020"
                                    money="1.500.000 VND"
                                />
                            </div>




                            <div className="tab5 cointab" style={{ display: 'block' }}>
                                <div className="coininfo">
                                    <div className="coininfo__box">
                                        <h3><strong>Thông tin COIN</strong></h3>
                                        <div className="coininfo__box-ct">
                                            <div>
                                                <img src="img/cfd-coin.png" alt="" />
                                                <p>Bạn có <strong>300</strong> COIN</p>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="coininfo__box">
                                        <h3><strong>Đổi COIN</strong></h3>
                                        <div className="coininfo__box-ct">
                                            <CoinCheck title="Voucher Tiki 100k" />
                                            <CoinCheck title="Voucher Tiki 200k" />
                                            <CoinCheck title="Voucher Tiki 500k" />
                                            <CoinCheck title="Thẻ nạp điện thoại 100k" />
                                            <CoinCheck title="Thẻ nạp điện thoại 200k" />
                                            <CoinCheck title="Thẻ nạp điện thoại 500k" />


                                            <small><i>*Bạn có thể đổi COIN 1 lần</i></small>
                                        </div>
                                        <a href="javascript:void(0)" className="btn main">Đổi COIN</a>
                                    </div>
                                </div>



                                <div className="coinhistory">
                                    <h3><strong>Lịch sử COIN</strong></h3>
                                    <div className="itemhistory">
                                        <div className="td"><strong>COIN</strong></div>
                                        <div className="td"><strong>Thời gian</strong></div>
                                        <div className="td"><strong>Nội dung</strong></div>
                                        <div className="td"><strong>Trạng thái</strong></div>
                                    </div>

                                    <CoinHistory
                                        coin="red"
                                        time="09/09/2020"
                                        content="Giới thiệu khóa học cho học viên mới"
                                        status="Đã chấp nhận"
                                    />
                                    <CoinHistory
                                        coin=""
                                        time="19/09/2020"
                                        content="Dùng COIN để quy đổi sang Voucher Tiki"
                                        status="Đã chấp nhận"
                                    />
                                    <CoinHistory
                                        coin="red"
                                        time="19/09/2020"
                                        content="Dùng COIN để đổi sang Thẻ nạp điện thoại"
                                        status="Chờ duyệt"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
