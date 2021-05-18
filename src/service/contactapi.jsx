import { endpoint } from './config';

const ContactApi = {
    contact(data) {
        return fetch(`${endpoint}/elearning/v4/contact`, {
            method: 'POST', // request kieu POST
            //gui len backend du lieu thi truyen vao body
            body: JSON.stringify(data), //trong {} la kieu du lieu dang JSON
            headers: {
                'Content-Type': 'application/json'
            } //truyen JSON len backend, phai co buoc nay de backend nhan duoc
        }).then(res => res.json())
    }
}

export default ContactApi