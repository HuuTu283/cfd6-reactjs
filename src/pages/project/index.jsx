import ProjectItem from "./components/ProjectItem";


export default function Project() {
    return (
        <main className="projectpage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">dự án</h2>
                    <p className="top-des">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
                        luctus
                    </p>
                    <div className="list row">
                        <ProjectItem
                            project_name="furnitown"
                            makeby="Hoàn thành với Trần Nghĩa"
                            project_img="img/project/project (1).jpg"
                        />
                        <ProjectItem
                            project_name="kymco"
                            makeby="Hoàn thành với Huỳnh Tiến Tài"
                            project_img="img/project/project (1).png"
                        />
                        <ProjectItem
                            project_name="gboxmb"
                            makeby="Hoàn thành bởi Nguyễn Văn Tuấn"
                            project_img="img/project/project (3).jpg"
                        />
                        <ProjectItem
                            project_name="wooder"
                            makeby="Hoàn thành bởi Nguyễn Đức Huy"
                            project_img="img/project/project (4).jpg"
                        />
                        <ProjectItem
                            project_name="ChinSu"
                            makeby="Hoàn thành bởi Nguyễn Văn Tuấn"
                            project_img="img/project/project (5).jpg"
                        />
                        <ProjectItem
                            project_name="ShinhanBank"
                            makeby="Hoàn thành bởi Nguyễn Đức Huy"
                            project_img="img/project/project (6).jpg"
                        />
                        <ProjectItem
                            project_name="Alibaba"
                            makeby="Hoàn thành bởi Nguyễn Văn Tuấn"
                            project_img="img/project/project (2).jpg"
                        />
                        <ProjectItem
                            project_name="Grab"
                            makeby="Hoàn thành bởi Nguyễn Đức Huy"
                            project_img="img/project/project (2).png"
                        />
                    </div>
                    <div className="bottom">
                        <div className="btn overlay round btn-more">
                            tải thêm
                         </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
