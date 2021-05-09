import React from 'react'
import { useParams } from "react-router-dom"

import { CourseItem } from "../../components"
import Accordion from "./components/Accordion"
import Banner from "./components/Banner"
import Calendar from "./components/Calendar"
import Check from "./components/Check"
import Teacher from "./components/Teacher"
import UserRegister from './components/UserRegister';


export default function CourseDetail() {

    let { slug } = useParams()

    return (
        <main className="course-detail" id="main">
            <Banner
                title="Thực Chiến Front-End Căn Bản"
                date="12/10/2020"
                time="18 buổi"
                money="4.000.000"
            />
            <section className="section-2">
                <div className="container">
                    <p className="des">Many Laravel apps don’t warrant the complexity of a full front-end framework like Vue or
                    React. In this series, we’ll walk through a handful of simple ways to add dynamic functionality to
              your apps.</p>
                    <h2 className="title">giới thiệu về khóa học</h2>
                    <div className="cover">
                        <img src="/img/course-detail-img.png" alt="" />
                    </div>
                    <h3 className="title">nội dung khóa học</h3>
                    <Accordion
                        date="1"
                        intro="Giới thiệu HTML, SEO, BEM."
                        content="
                        I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
                        some tangible benefits over alternatives like VueJS for simple page interactions."

                    />
                    <Accordion
                        date="2"
                        intro="CSS, CSS3, Flexbox, Grid"
                        content="
                        I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
                        some tangible benefits over alternatives like VueJS for simple page interactions."

                    />
                    <Accordion
                        date="3"
                        intro="Media Queries"
                        content="
                        I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
                        some tangible benefits over alternatives like VueJS for simple page interactions."

                    />
                    <Accordion
                        date="4"
                        intro="Boostrap 4"
                        content="
                        I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
                        some tangible benefits over alternatives like VueJS for simple page interactions."

                    />
                    <Accordion
                        date="5"
                        intro="Thực hành dự án website Landing Page"
                        content="
                        I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
                        some tangible benefits over alternatives like VueJS for simple page interactions."

                    />
                    <Accordion
                        date="6"
                        intro="Cài đặt Grunt và cấu trúc thư mục dự án"
                        content="
                        I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
                        some tangible benefits over alternatives like VueJS for simple page interactions."
                    />


                    <Check />
                    <Calendar
                        date="09/09/2020"
                        time="Thứ 3 từ 18h45-21h45, Thứ 7 từ 12h-15h, Chủ nhật từ 15h-18h"
                    />
                    <Teacher
                        ava="img/Intersect (1).png"
                        name="TRẦN NGHĨA"
                        title="Founder CFD &amp; Creative Front-End Developer"
                        intro="
                        My education, career, and even personal life have been molded by one simple principle;
                        well
                        designed information resonates with people and can change lives.I have a passion for
                        making
                        information resonate. It all starts with how people think. With how humans work. As
                        humans
                        we have learned how to read and write and while that is incredible, we are also already
                        hard-wired to do some things a bit more automatically"
                        link="http://nghiatran.info"
                    />
                    <UserRegister />
                </div>
            </section>
            <section className="section-3">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">DỰ ÁN</h3>
                        <h2 className="main-title">THÀNH VIÊN</h2>
                    </div>
                    <div className="list row">
                        <CourseItem
                            title="React JS"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img2.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Nguyễn Huy"
                            status="da-ket-thuc"
                        />

                        <CourseItem
                            title="Animation"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img3.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Đặng Vương"
                            status="dang-dien-ra"
                        />

                        <CourseItem
                            title="Scss, Grunt JS và Boostrap 4"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img4.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Trần Nghĩa"
                            status="da-ket-thuc"
                        />
                    </div>
                </div>
            </section>
            <section className="section-4">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">Khóa học</h3>
                        <h2 className="main-title">Liên quan</h2>
                    </div>
                    <div className="list row">
                        <CourseItem
                            title="Front-end căn bản"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Đặng Quân"
                            status=""
                        />

                        <CourseItem
                            title="React JS"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img2.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Nguyễn Huy"
                            status="da-ket-thuc"
                        />

                        <CourseItem
                            title="Animation"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img3.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Đặng Vương"
                            status="dang-dien-ra"
                        />
                    </div>
                </div>
            </section>
        </main >
    )
}
