import { useState } from "react"
import useValidateForm from '../../../hook/useValidateForm';
import Auth from '../../../service/auth';


export default function TabInfo() {

    const [info, setInfo] = useState(null)

    let { form, error, inputChange, check } = useValidateForm({
        name: '',
        phone: '',
        facebook: '',
        skype: ''
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
            skype: {
                required: true,
                pattern: /^(?:http(s)?:\/\/)?(www\.)?join.skype.com\/[a-zA-Z0-9(\.\?)?]/
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
                pattern: 'Facebook URL is invalid!'
            },
            skype: {
                required: 'URL cannot be blank. Please enter your URL!',
                pattern: 'Skype URL is invalid!'
            }
        }
    })


    async function onSave() {
        let errorObj = check();

        setInfo('Something went wrong. We were unable to send your request!')

        if (Object.keys(errorObj).length === 0) {
            await Auth.update(form)
            setInfo('Thank you! Your request has been submitted.')
        }
    }


    return (
        <div className="tab1">
            <label>
                <p>Họ và tên<span>*</span></p>
                <input name="name" value={form.name} onChange={inputChange} type="text" placeholder="Nguyễn Văn A" />
                {
                    error.name && <p className="error-text">{error.name}</p>
                }
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input name="phone" value={form.phone} onChange={inputChange} type="text" placeholder="0949******" />
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
                <input name="facebook" value={form.facebook} onChange={inputChange} type="text" placeholder="Facebook url" />
                {
                    error.facebook && <p className="error-text">{error.facebook}</p>
                }
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input name="skype" value={form.skype} onChange={inputChange} type="text" placeholder="Skype url" />
                {
                    error.skype && <p className="error-text">{error.skype}</p>
                }
            </label>
            {info && <p className="error-text">{info}</p>}
            <div className="btn main rect" onClick={onSave}>LƯU LẠI</div>
        </div>
    )
}
