import { useReducer, useState } from "react"
import useValidateForm from "../../hook/useValidateForm";


export default function Register() {


    let { form, error, inputChange, check } = useValidateForm({
        name: '',
        phone: '',
        facebook: '',
        email: '',
        content: ''
    }, {
        rules: {
            name: {
                required: true,
                pattern: 'name',
                namemin: 2,
                namemax: 32
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            facebook: {
                required: true,
                pattern: /^(?:http(s)?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/
            },
            email: {
                required: true,
                pattern: 'email'
            },
            content: {
                required: true,
                pattern: /[\s\S]{10,}/
            }
        },
        message: {
            name: {
                required: 'Name cannot be blank. Please enter your fullname!',
                pattern: '()[]{}*&^%$#@! and numbers are not allowed!'
            },
            phone: {
                required: 'Phone cannot be blank. Please enter your phone number!',
                pattern: 'Please enter your phone number in VietNam format and only 10 digits.'
            },
            facebook: {
                required: 'URL cannot be blank. Please enter your URL!',
                pattern: 'URL is invalid!'
            },
            email: {
                required: 'Email cannot be blank. Please enter your email!',
                pattern: 'Please enter a valid email address. Ex: example@example.com...'
            },
            content: {
                required: 'Content cannot be blank. Please enter your content!',
                pattern: 'Must be at least 10 characters long.'
            }

        }
    })



    function onSubmit() {
        let errorObj = check();
        if (Object.keys(errorObj).length === 0) {

        }
    }



    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">????NG K??</div>
                        <h1 className="main-title">Th???c chi???n front-end c??n b???n </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai gi???ng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Th???i l?????ng:</strong> 18 bu???i</div>
                            <div className="time"><strong>H???c ph??:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>H??? v?? t??n<span>*</span></p>
                                <input name="name" value={form.name} onChange={inputChange} type="text" placeholder="H??? v?? t??n b???n" />
                                {
                                    error.name && <p className="error-text">{error.name}</p>
                                }
                            </label>
                            <label>
                                <p>S??? ??i???n tho???i<span>*</span></p>
                                <input name="phone" value={form.phone} onChange={inputChange} type="text" placeholder="S??? ??i???n tho???i" />
                                {
                                    error.phone && <p className="error-text">{error.phone}</p>
                                }
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input name="email" value={form.email} onChange={inputChange} type="text" placeholder="Email c???a b???n" />
                                {
                                    error.email && <p className="error-text">{error.email}</p>
                                }
                            </label>

                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input name="facebook" value={form.facebook} onChange={inputChange} type="text" placeholder="https://facebook.com" />
                                {
                                    error.facebook && <p className="error-text">{error.facebook}</p>
                                }
                            </label>
                            <label className="disable">
                                <p>S??? d???ng COIN</p>
                                <div className="checkcontainer">
                                    Hi???n c?? <strong>300 COIN</strong>
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>H??nh th???c thanh to??n</p>
                                <div className="select">
                                    <div className="head">Chuy???n kho???n</div>
                                    <div className="sub">
                                        <a href="#">Chuy???n kho???n</a>
                                        <a href="#">Thanh to??n ti???n m???t</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>?? ki???n c?? nh??n</p>
                                <input name="content" value={form.content} onChange={inputChange} type="text" placeholder="Mong mu???n c?? nh??n v?? l???ch b???n c?? th??? h???c." />
                                {
                                    error.content && <p className="error-text">{error.content}</p>
                                }
                            </label>
                            <div onClick={onSubmit} className="btn main rect">????ng k??</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
