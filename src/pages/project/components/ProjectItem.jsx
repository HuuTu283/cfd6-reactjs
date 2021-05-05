

export default function ProjectItem({ project_name, makeby, project_img }) {
    return (
        <a href="#" className="item col-md-6">
            <div className="wrap">
                <div className="cover">
                    <img src={project_img} alt="" />
                </div>
                <div className="info">
                    <div className="name">{project_name}</div>
                    <div className="makeby"> {makeby} </div>
                </div>
            </div>
        </a>
    )
}
