import { CourseItem } from '../../../components/CourseItem';

export default function CourseList() {
    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                     </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
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
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
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

                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}
