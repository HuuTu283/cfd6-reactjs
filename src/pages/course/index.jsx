import { CourseItem } from "../../components";


export default function Course() {
    return (
        <main className="homepage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">KHÓA HỌC CFD</h2>
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
            </p>
                    <div className="textbox">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">ONLINE</h2>
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

                        <CourseItem
                            title="Scss, Grunt JS và Boostrap 4"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img4.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Trần Nghĩa"
                            status="da-ket-thuc"
                        />

                        <CourseItem
                            title="UX/UI Design"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img5.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Trần Nghĩa"
                            status="dang-dien-ra"
                        />

                        <CourseItem
                            title="Web Responsive"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img6.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Trần Nghĩa"
                            status=""
                        />
                    </div>
                </div>
            </section>
            <section className="section-2 section-blue">
                <div className="container">
                    <div className="textbox white">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">OFFLINE</h2>
                    </div>
                    <div className="list row">
                        <CourseItem
                            title="Scss, Grunt JS và Boostrap 4"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img4.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Trần Nghĩa"
                            status="da-ket-thuc"
                        />

                        <CourseItem
                            title="UX/UI Design"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img5.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Trần Nghĩa"
                            status="dang-dien-ra"
                        />

                        <CourseItem
                            title="Web Responsive"
                            description="One of the best corporate fashion brands in Sydney"
                            image="/img/img6.png"
                            ava_teacher="/img/avt.png"
                            name_teacher="Trần Nghĩa"
                            status=""
                        />

                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </main>
    )
}
