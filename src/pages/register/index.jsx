import { useState } from "react"


export default function Register() {
    let [form, setForm] = useState({
        name: '',
        phone: '',
        facebook: '',
        email: '',
        content: ''
    })

    let [error, setError] = useState({
        name: '',
        phone: '',
        facebook: '',
        email: '',
        content: ''
    })

    function OnSubmit() {
        let errorObj = {}

        form.name.trim().replace(/ +/g, ' ')
        if (!form.name.trim()) {
            errorObj.name = 'thieu ten'

        } else if (!/^[[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{2,20}/.test(form.name)) {
            errorObj.name = 'ten chua dung'
        }


        if (!form.phone.trim()) {
            errorObj.phone = 'phone chua nhap'
        } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
            errorObj.phone = 'phone sai dinh dang'
        }


        if (!form.email.trim()) {
            errorObj.email = 'chua nhap email'
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
            errorObj.email = 'sai dinh dang'
        }



        if (!form.facebook.trim()) {
            errorObj.facebook = 'facebook chua nhap'
        } else if (!/^(?:http(s)?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/.test(form.facebook)) {
            errorObj.facebook = 'facebook sai dinh dang'

        }

        // if (!form.content.trim()) { errorObj.content = 'sai content' }


        setError(errorObj)
        if (Object.keys(errorObj).length === 0) {
            console.log(form)
        }
    }

    function InputOnchange(e) {
        let name = e.target.name;
        let value = e.target.value;

        setForm({
            ...form,
            [name]: value
        })
    }

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
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input name="name" value={form.name} onChange={InputOnchange} type="text" placeholder="Họ và tên bạn" />
                                {
                                    error.name && <p className="error-text">{error.name}</p>
                                }
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input name="phone" value={form.phone} onChange={InputOnchange} type="text" placeholder="Số điện thoại" />
                                {
                                    error.phone && <p className="error-text">{error.phone}</p>
                                }
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input name="email" value={form.email} onChange={InputOnchange} type="text" placeholder="Email của bạn" />
                                {
                                    error.email && <p className="error-text">{error.email}</p>
                                }
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input name="facebook" value={form.facebook} onChange={InputOnchange} type="text" placeholder="https://facebook.com" />
                                {
                                    error.facebook && <p className="error-text">{error.facebook}</p>
                                }
                            </label>
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
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input name="content" value={form.content} onChange={InputOnchange} type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                                {
                                    error.content && <p className="error-text">{error.content}</p>
                                }
                            </label>

                            <div onClick={OnSubmit} className="btn main rect">đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
