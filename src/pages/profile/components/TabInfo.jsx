import { useState } from "react"


export default function TabInfo() {

    let [form, setForm] = useState({
        name: '',
        phone: '',
        facebook: '',
        skype: ''
    })

    let [error, setError] = useState({
        name: '',
        phone: '',
        facebook: '',
        skype: ''
    })

    function OnSave() {
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



        if (!form.facebook.trim()) {
            errorObj.facebook = 'facebook chua nhap'
        } else if (!/^(?:http(s)?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/.test(form.facebook)) {
            errorObj.facebook = 'facebook sai dinh dang'

        }

        if (!form.skype.trim()) {
            errorObj.skype = 'skype chua nhap'
        } else if (!/^(?:http(s)?:\/\/)?(www\.)?join.skype.com\/[a-zA-Z0-9(\.\?)?]/.test(form.skype)) {
            errorObj.skype = 'skype sai dinh dang'

        }



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
        <div className="tab1">
            <label>
                <p>Họ và tên<span>*</span></p>
                <input name="name" value={form.name} onChange={InputOnchange} type="text" placeholder="Nguyễn Văn A" />
                {
                    error.name && <p className="error-text">{error.name}</p>
                }
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input name="phone" value={form.phone} onChange={InputOnchange} type="text" placeholder="0949******" />
                {
                    error.phone && <p className="error-text">{error.phone}</p>
                }
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input name="facebook" value={form.facebook} onChange={InputOnchange} type="text" placeholder="Facebook url" />
                {
                    error.facebook && <p className="error-text">{error.facebook}</p>
                }
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input name="skype" value={form.skype} onChange={InputOnchange} type="text" placeholder="Skype url" />
                {
                    error.skype && <p className="error-text">{error.skype}</p>
                }
            </label>
            <div className="btn main rect" onClick={OnSave}>LƯU LẠI</div>
        </div>
    )
}
