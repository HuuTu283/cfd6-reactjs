import { Link, NavLink } from "react-router-dom"
import useAuth from "../hook/useAuth"
import useDelayLink from '../hook/useDelayLink'

export function Header() {

    let delayLink = useDelayLink()
    function toggleMenu() {
        document.body.classList.toggle('menu-is-show')
    }

    let { login, handleLogout } = useAuth()

    function popupLogin() {
        document.querySelector('.popup-login').style.display = 'flex'
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

                        {
                            login ? <div className="have-login">
                                <div className="account">
                                    <Link to="/thong-tin-ca-nhan" className="info" onClick={delayLink}>
                                        <div className="name">{login.name}</div>
                                        <div className="avatar">
                                            <img src={login.avatar} alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <Link onClick={delayLink} to="/thong-tin-ca-nhan/khoa-hoc-cua-ban">Khóa học của tôi </Link>
                                    <Link onClick={delayLink} to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                                    <a onClick={e => { e.preventDefault(); handleLogout() }} href="/">Đăng xuất</a>
                                </div>
                            </div>
                                :
                                <div class="not-login bg-none">
                                    <Link href="#" class="btn-register" onClick={popupLogin}>Đăng nhập</Link>
                                    <Link to="/dang-ky" class="btn main btn-open-login">Đăng ký</Link>
                                </div>
                        }

                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <Link to="/dang-ky">Đăng ký</Link>
                        <Link to="#">Đăng nhập</Link>
                    </li>
                    <li>
                        <NavLink exact onClick={delayLink} to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/team">CFD Team</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/khoa-hoc">Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/du-an">Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/lien-he">Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" onClick={toggleMenu}></div>
        </>
    )
}
