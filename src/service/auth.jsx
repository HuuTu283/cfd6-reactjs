import { endpoint } from './config';

const Auth = {
    login(data) {
        //fetch la xu li API lq den BE - la bat dong bo - tra ve 1 promise (tham so dau tien la link goi API, tham so t2 la cac option cua request)
        return fetch(`${endpoint}/elearning/v4/login`, {
            method: 'POST', // request kieu POST
            //gui len backend du lieu thi truyen vao body
            body: JSON.stringify(data), //trong {} la kieu du lieu dang JSON
            headers: {
                'Content-Type': 'application/json'
            } //truyen JSON len backend, phai co buoc nay de backend nhan duoc
        }).then(res => res.json())
    },


    register(data) {
        return fetch(`${endpoint}/elearning/v4/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    },


    update(data) {
        let token = JSON.parse(localStorage.getItem('login'))?.token?.accessToken
        return fetch(`${endpoint}/elearning/v4/profile/update`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    }

}

export default Auth;