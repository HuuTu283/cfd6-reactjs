import { Link } from 'react-router-dom'
import useDelayLink from '../hook/useDelayLink'

export function Footer() {
    let delayLink = useDelayLink()
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 left">
                        <p className="des">
                            Sáng tạo, tinh tế và phù hợp sẽ khiến
                            sản phẩm của bạn trở nên khác biệt.
                        </p>
                        <p className="address">
                            Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh
                        </p>
                        <p className="phone">(+84) 98 9596 913</p>
                        <div className="social">
                            <Link onClick={delayLink} className="fb" to="/">
                                {/* <img src="img/icon-fb.svg" alt=""> */}
                            </Link>
                            <Link onClick={delayLink} className="gmail" to="/">
                                {/* <img src="img/icon-gmail.svg" alt=""> */}
                            </Link>
                            <Link onClick={delayLink} className="skype" to="/">
                                {/* <img src="img/icon-skype.svg" alt=""> */}
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <nav>
                            <ul>
                                <li>
                                    <Link onClick={delayLink} to="/">Trang chủ</Link>
                                </li>
                                <li>
                                    <Link onClick={delayLink} to="/khoa-hoc">Khóa học</Link>
                                </li>
                                <li>
                                    <Link onClick={delayLink} to="/thanh-toan">Thanh toán</Link>
                                </li>
                                <li>
                                    <Link onClick={delayLink} to="/faq">Điều khoản</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <a href="#" className="back-to-top">
                    <div className="line" />
                     CUỘN LÊN
                 </a>
            </div>
            <div className="copy-right">
                <div className="container">
                    <p>2020 Creative Front-End Dev</p>
                    <p>Được thiết kế và lập trình bởi CFD Team</p>
                </div>
            </div>
        </footer>
    )
}
