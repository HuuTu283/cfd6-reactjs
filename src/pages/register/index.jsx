import { Input } from "../../components";



export default function Register() {
    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <Input
                                title="Họ và tên"
                                type="text"
                                value="Họ và tên bạn"
                            />
                            <Input
                                title="Số điện thoại"
                                type="text"
                                value="Số điện thoại"
                            />
                            <Input
                                title="Email"
                                type="text"
                                value="Email của bạn"
                            />
                            <Input
                                title="URL Facebook"
                                type="text"
                                value="https://facebook.com"
                            />

                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>

                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>


                            <Input
                                title="Ý kiến cá nhân"
                                type="text"
                                value="Mong muốn cá nhân và lịch bạn có thể học."
                            />

                            <div className="btn main rect">đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
