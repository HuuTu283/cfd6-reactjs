import AnotherMember from "./components/AnotherMember"
import Member from "./components/Member"

export default function Team() {
    return (
        <main className="team" id="main">
            <section>
                <div className="container">
                    <div className="top">
                        <h2 className="main-title">cfd team</h2>
                        <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                        elementum
                        sem non luctus
                        </p>
                    </div>
                    <div className="list row">
                        <Member
                            member_image="img/Intersect (1).png"
                            member_name="Trần Nghĩa"
                            member_job="Founder &amp; Creative Front-End Developer"
                        />
                        <Member
                            member_image="img/Intersect (2).png"
                            member_name="Đặng Thuyền Vương"
                            member_job="Co-Founder &amp; Fullstack Developer"
                        />
                        <Member
                            member_image="img/Intersect (3).png"
                            member_name="Đặng Thuyền Quân"
                            member_job="Co-Founder &amp; Backend Developer"
                        />
                        <Member
                            member_image="img/Intersect.png"
                            member_name="Nguyễn Đức Huy"
                            member_job="Co-Founder &amp; Front-End Developer"
                        />

                        <AnotherMember

                            AnotherMember_image="img/img (1).png"
                            AnotherMember_name="Diệp anh thy"
                            title="CFD1-Offline"
                        />
                        <AnotherMember

                            AnotherMember_image="img/img (2).png"
                            AnotherMember_name="Diệp anh thy"
                            title="CFD1-Offline"
                        />
                        <AnotherMember

                            AnotherMember_image="img/img (3).png"
                            AnotherMember_name="huỳnh tiến tài"
                            title="CFD1-Offline"
                        />
                        <AnotherMember

                            AnotherMember_image="img/img (4).png"
                            AnotherMember_name="Ngô thành long"
                            title="CFD1-Offline"
                        />
                        <AnotherMember

                            AnotherMember_image="img/img (5).png"
                            AnotherMember_name="trần anh tuấn"
                            title="CFD1-Offline"
                        />
                        <AnotherMember

                            AnotherMember_image="img/img (6).png"
                            AnotherMember_name="ngô thành long"
                            title="CFD1-Offline"
                        />
                        <AnotherMember

                            AnotherMember_image="img/img (7).png"
                            AnotherMember_name="nguyễn thành tùng"
                            title="CFD1-Offline"
                        />
                        <AnotherMember

                            AnotherMember_image="img/img (8).png"
                            AnotherMember_name="phạm thành trung"
                            title="CFD1-Offline"
                        />


                    </div>
                </div>
            </section>
        </main>
    )
}