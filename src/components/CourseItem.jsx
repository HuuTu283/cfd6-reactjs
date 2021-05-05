export function CourseItem({ title, description, image, ava_teacher, name_teacher, status }) {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src={image} alt="" />
                    {
                        status === 'da-ket-thuc' ? <span className="badge b1">Đã kết thúc</span> :
                            (
                                status === 'dang-dien-ra' ? <span className="badge b2">Đang diễn ra</span> :
                                    <span className="badge b3">Sắp diễn ra</span>
                            )

                    }

                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="img/icon-user-white.svg" alt="" />
                          12</div>
                            <div className="heart">
                                <img src="img/icon-heart.svg" alt="" /> 100
                        </div>
                        </div>
                        <div className="share">
                            <img src="img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </a>
                <div className="info">
                    <a className="name" href="#">
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
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>
    )
}
