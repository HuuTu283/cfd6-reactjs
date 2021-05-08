import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import useDelayLink from '../hook/useDelayLink'


export function Nav() {

    let delayLink = useDelayLink()


    return ReactDOM.createPortal(
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
        </nav>,
        document.body
    )
}
