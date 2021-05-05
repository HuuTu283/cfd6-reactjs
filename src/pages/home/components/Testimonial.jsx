import TestimonialImg from "./TestimonialImg"
import TestimonialItem from "./TestimonialItem"


export default function Testimonial() {
    return (
        <section className="section-testimonial">
            <div className="container">
                <div className="textbox">
                    <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
                </div>
                <div className="testimonial">
                    <div className="testimonial-item">
                        <div className="item">
                            <div className="text">

                                <div className="ct ct-1 active">
                                    <TestimonialItem
                                        name="Tiến Tài"
                                        title="Thành viên CFD1"
                                        content="Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình front-end qua khóa học. Like cho 4 mentor."
                                        date="09/10/2020"
                                    />
                                </div>

                                <div className="ct ct-2">
                                    <TestimonialItem
                                        name="Phạm Thành Trung"
                                        title="Thành viên CFD1"
                                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor in, molestie lectus. Aenean porttitor purus at purus euismod tristique"
                                        date="01/10/2020"
                                    />
                                </div>
                                <div className="ct ct-3">
                                    <TestimonialItem
                                        name="Nguyễn Văn Tuấn"
                                        title="Thành viên CFD1"
                                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor in, molestie lectus. Aenean porttitor purus at purus euismod tristique"
                                        date="01/10/2020"
                                    />
                                </div>
                            </div>
                            <div className="images">
                                <div className="list">
                                    <div className="carousel-cell">
                                        <TestimonialImg
                                            source="/img/Intersect.png"
                                            img="/img/tes.jpg"
                                        />
                                        <div className="ct_m">
                                            <TestimonialItem
                                                name="Tiến Tài"
                                                title="Thành viên CFD1"
                                                content="Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình front-end qua khóa học. Like cho 4 mentor."
                                                date="09/10/2020"
                                            />
                                        </div>
                                    </div>
                                    <div className="carousel-cell">
                                        <TestimonialImg
                                            source="/img/Intersect.png"
                                            img="/img/tes.jpg"
                                        />
                                        <div className="ct_m">
                                            <TestimonialItem
                                                name="Phạm Thành Trung"
                                                title="Thành viên CFD1"
                                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor in, molestie lectus. Aenean porttitor purus at purus euismod tristique"
                                                date="01/10/2020"
                                            />
                                        </div>
                                    </div>
                                    <div className="carousel-cell">
                                        <TestimonialImg
                                            source="/img/Intersect.png"
                                            img="/img/tes.jpg"
                                        />
                                        <div className="ct_m">
                                            <TestimonialItem
                                                name="Nguyễn Văn Tuấn"
                                                title="Thành viên CFD1"
                                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor in, molestie lectus. Aenean porttitor purus at purus euismod tristique"
                                                date="01/10/2020"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dots" />
                        <div className="btn_ctr prev" />
                        <div className="btn_ctr next" />
                    </div>
                </div>
            </div>
        </section>
    )
}
