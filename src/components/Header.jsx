import { Link } from "react-router-dom"
import useDelayLink from '../hook/useDelayLink'

export function Header() {

    let delayLink = useDelayLink()
    function toggleMenu() {
        document.body.classList.toggle('menu-is-show')
    }
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={toggleMenu}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" className="logo" onClick={delayLink}>
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        <div className="have-login">
                            <div className="account">
                                <Link to="/profile" className="info" onClick={delayLink}>
                                    <div className="name">Trần Lê Trọng Nghĩa</div>
                                    <div className="avatar">
                                        <img src="img/avt.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <Link onClick={delayLink} to="/profile/khoa-hoc-cua-ban">Khóa học của tôi </Link>
                                <Link onClick={delayLink} to="/profile">Thông tin tài khoản</Link>
                                <Link onClick={delayLink} to="/">Đăng xuất</Link>
                            </div>
                        </div>
                        {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <Link to="#">Đăng ký / Đăng nhập</Link>
                    </li>
                    <li className="active">
                        <Link onClick={delayLink} to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/team">CFD Team</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/khoa-hoc">Khóa Học</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/du-an">Dự Án</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/lien-he">Liên hệ</Link>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" onClick={toggleMenu}></div>
        </>
    )
}
