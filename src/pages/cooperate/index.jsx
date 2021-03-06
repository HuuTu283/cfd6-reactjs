import { useReducer, useState } from "react"
import useValidateForm from "../../hook/useValidateForm";
import ContactApi from '../../service/contactapi';


// function reducer(state, action) { //dispatch duoc truyen vao action
//     switch (action.type) {
//         case "INPUT_CHANGE":
//             console.log(action);
//             return {
//                 ...state,
//                 form: {
//                     ...state.form,
//                     ...action.payload
//                 }
//             }
//         case "SET_ERROR":
//             console.log(action);
//             return {
//                 ...state,
//                 error: action.payload
//             }
//     }
//     return state;
// }

export default function Contact() {
    // let [state, dispatch] = useReducer(reducer, {
    //     form: {
    //         name: '',
    //         phone: '',
    //         email: '',
    //         website: '',
    //         title: '',
    //         content: ''
    //     },

    //     error: {
    //         name: '',
    //         phone: '',
    //         email: '',
    //         website: '',
    //         title: '',
    //         content: ''
    //     }
    // })

    const [contact, setContact] = useState(null)

    let { form, error, inputChange, check } = useValidateForm({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
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
            email: {
                required: true,
                pattern: 'email'
            },
            website: {
                required: true,
                pattern: 'url'
            },
            title: {
                required: true,
                pattern: /[\s\S]{10,}/


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
            email: {
                required: 'Email cannot be blank. Please enter your email!',
                pattern: 'Please enter a valid email address. Ex: example@gmail.com...'
            },
            website: {
                required: 'URL cannot be blank. Please enter your URL!',
                pattern: 'URL is invalid!'
            },
            title: {
                required: 'Title cannot be blank. Please enter your title!',
                pattern: 'Must be at least 10 characters long.'
            },
            content: {
                required: 'Content cannot be blank. Please enter your content!',
                pattern: 'Must be at least 10 characters long.'
            }

        }
    })

    async function onSubmit() {
        let errorObj = check()

        // setError(errorObj);
        // dispatch({
        //     type: 'SET_ERROR',
        //     payload: errorObj
        // })
        setContact('Something went wrong. We were unable to send your request!')

        if (Object.keys(errorObj).length === 0) {
            let res = await ContactApi.contact(form)
            // console.log(form)
            // console.log(res)
            //call api
            if (res.success) {
                setContact('Thank you! Your request has been submitted.')
            }

        }

    }

    // function InputOnChange(e) {
    //     let name = e.target.name;
    //     let value = e.target.value;

    //     dispatch({
    //         type: 'INPUT_CHANGE',
    //         payload: {
    //             [name]: value
    //         }
    //     })

    //     // setForm({
    //     //     ...form,
    //     //     [name]: value
    //     // })
    // }

    // let { form, error } = state;



    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">

                <h2 className="main-title">H???P T??C C??NG CFD</h2>
                <p className="top-des">
                    ?????ng ng???n ng???i li??n h??? v???i <strong>CFD</strong> ????? c??ng nhau t???o ra nh???ng s???n ph???m gi?? tr???, c??ng nh??
                    vi???c h???p t??c v???i c??c ?????i t??c tuy???n d???ng v?? c??ng ty trong v?? ngo??i n?????c.
                </p>
                <div className="form">
                    <label>
                        <p>H??? v?? t??n<span>*</span></p>
                        <input name="name" value={form.name} onChange={inputChange} type="text" placeholder="H??? v?? t??n b???n" />
                        {
                            error.name && <p className="error-text">{error.name}</p>
                        }
                    </label>
                    <label>
                        <p>S??? ??i???n tho???i</p>
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
                        <p>Website</p>
                        <input name="website" value={form.website} onChange={inputChange} type="text" placeholder="???????ng d???n website http://" />
                        {
                            error.website && <p className="error-text">{error.website}</p>
                        }
                    </label>
                    <label>
                        <p>Ti??u ?????<span>*</span></p>
                        <input name="title" value={form.title} onChange={inputChange} type="text" placeholder="Ti??u ????? li??n h???" />
                        {
                            error.title && <p className="error-text">{error.title}</p>
                        }
                    </label>

                    <label>
                        <p>N???i dung<span>*</span></p>
                        <textarea name="content" value={form.content} onChange={inputChange} cols={30} rows={10} />
                        {
                            error.content && <p className="error-text">{error.content}</p>
                        }
                    </label>
                    {contact && <p className="error-text">{contact}</p>}
                    <div onClick={onSubmit} className="btn main rect">????ng k??</div>
                </div>
            </section>

        </main>
    )
}
