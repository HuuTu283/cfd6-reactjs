

export default function CourseDone({ title, description, image, ava_teacher, name_teacher }) {
    return (
        <div className="col-md-6 course">
            <div className="wrap">
                <a href="#" className="cover">
                    <img src={image} alt="" />
                </a>
                <div className="info">
                    <a href="#" className="name">
                        {title}
                    </a>
                    <p className="des">
                        {description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={ava_teacher} alt="" />
                        </div>
                        <div className="name">{name_teacher}</div>
                    </div>
                    <div className="register-btn">Website</div>
                </div>
            </div>
        </div>
    )
}
