import React, { useState } from 'react'
import reactDOM from 'react-dom';
import useValidateForm from '../hook/useValidateForm';
import useAuth from '../hook/useAuth';

export default function PopupLogin() {
    const [loginError, setLoginError] = useState(null)

    let { error, form, inputChange, check } = useValidateForm({
        username: '',
        password: ''
    }, {
        rules: {
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6,
                max: 32
            }
        },
        message: {
            username: {
                required: 'This field cannot be blank. Please enter your email!',
                pattern: 'Please enter a valid email address or phone number!'
            }
        }
    })

    let { handleLogin } = useAuth()

    async function loginHandle() {
        let error = check()
        if (Object.keys(error).length === 0) {
            let res = await handleLogin(form.username, form.password)
            if (res.success) {
                closeLogin()
            } else if (res.error) {
                setLoginError(res.error)
            }
        }
    }

    function closeLogin() {
        document.querySelector('.popup-login').style.display = 'none'
    }




    return reactDOM.createPortal(
        <div className="popup-form popup-login" style={{ display: 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    {loginError && <p className="error-text">{loginError}</p>}
                    <input value={form.username} name="username" onChange={inputChange} type="text" placeholder="Email / Số điện thoại" />
                    {
                        error.username && <p className="error-text">{error.username}</p>
                    }

                    <input value={form.password} name="password" onChange={inputChange} type="password" placeholder="Mật khẩu" />
                    {
                        error.password && <p className="error-text">{error.password}</p>
                    }
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />

                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={loginHandle}>đăng nhập</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt="" />
                            Google
                        </div>
                    </div>
                    <div className="close" onClick={closeLogin} >
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
                {/* email form */}
                <div className="ct_email">
                    <h2 className="title">Đặt lại mật khẩu</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Tiếp theo</div>
                    <div className="back" />
                    <div className="close" onClick={closeLogin}>
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}
