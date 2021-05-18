
import Banner from "./components/Banner";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Action from './components/Action';
import CourseApi from "../../service/courseapi";
import { useEffect, useState } from "react";


import CourseList from '../../components/CourseList';

export default function Home() {
    let [list, setList] = useState({
        offline: [],
        online: []
    })
    useEffect(() => {
        CourseApi.list()
            .then((res) => {
                setList(res)
            })

        // setList(await CourseApi.list())

    }, [])
    return (
        <main className="homepage" id="main">
            <Banner />
            <CourseList {...list} />
            <Different />
            <Testimonial />
            <Gallery />
            <Action />
        </main>
    )
}