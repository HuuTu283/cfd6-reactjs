import { endpoint } from './config';

const CourseApi = {
    list() {
        return fetch(`${endpoint}/elearning/v4/home`, {
            method: 'GET',
        }).then(res => res.json())
    },
    details(slug) {
        return fetch(`${endpoint}/elearning/v4/course/${slug}`, {
            method: 'GET',
        }).then(res => res.json())
    }
}

export default CourseApi