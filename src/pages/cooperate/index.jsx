import { useState } from "react"

export default function Cooperate() {

    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: '',
    })

    let [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: '',
    })

    function OnSubmit() {
        let errorObj = {}
        form.name.trim().replace(/ +/g, ' ')
        if (!form.name.trim()) {
            errorObj.name = 'thieu ten'
        }

        if (!form.phone.trim()) {
            errorObj.phone = 'phone chua nhap'
        } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
            errorObj.phone = 'phone sai dinh dang'
        }

        if (!form.email.trim()) {
            errorObj.email = 'sai ten'
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
            errorObj.email = 'sai dinh dang'
        }

        if (form.website.trim() && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(form.website)) {
            errorObj.website = 'web sai dinh dang'
        }



        if (!form.title.trim()) { errorObj.title = 'sai tieu de' }
        if (!form.content.trim()) { errorObj.content = 'sai content' }

        setError(errorObj);

        if (Object.keys(errorObj).length === 0) {
            console.log(form);

        }

    }

    function InputOnChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        setForm({
            ...form,
            [name]: value
        })
    }



    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">

                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
                <div className="form">
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input name="name" value={form.name} onChange={InputOnChange} type="text" placeholder="Họ và tên bạn" />
                        {
                            error.name && <p className="error-text">{error.name}</p>
                        }
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <input name="phone" value={form.phone} onChange={InputOnChange} type="text" placeholder="Số điện thoại" />
                        {
                            error.phone && <p className="error-text">{error.phone}</p>
                        }
                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <input name="email" value={form.email} onChange={InputOnChange} type="text" placeholder="Email của bạn" />
                        {
                            error.email && <p className="error-text">{error.email}</p>
                        }
                    </label>
                    <label>
                        <p>Website</p>
                        <input name="website" value={form.website} onChange={InputOnChange} type="text" placeholder="Đường dẫn website http://" />
                        {
                            error.website && <p className="error-text">{error.website}</p>
                        }
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input name="title" value={form.title} onChange={InputOnChange} type="text" placeholder="Tiêu đề liên hệ" />
                        {
                            error.title && <p className="error-text">{error.title}</p>
                        }
                    </label>

                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea name="content" value={form.content} onChange={InputOnChange} cols={30} rows={10} />
                        {
                            error.content && <p className="error-text">{error.content}</p>
                        }
                    </label>
                    <div onClick={OnSubmit} className="btn main rect">đăng ký</div>
                </div>
            </section>

        </main>
    )
}
