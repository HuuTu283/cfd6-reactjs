import CourseDone from "./CourseDone";


export default function TabCourseDone() {
    return (
        <div className="tab3">
            <div className="row">

                <CourseDone
                    title="Furnitown"
                    description="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    image="img/img8.png"
                    ava_teacher="img/Intersect (1).png"
                    name_teacher="Trần Nghĩa"
                />

                <CourseDone
                    title="GboxMB"
                    description="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    image="img/img8.png"
                    ava_teacher="img/Intersect (1).png"
                    name_teacher="Trần Nghĩa"
                />
            </div>
            <div className="btn-wrap">
                <div className="btn overlay btn-icon round">
                    <img src="img/icon-upload.svg" alt="" /> Tải lên
                                    </div>
            </div>
        </div>
    )
}
