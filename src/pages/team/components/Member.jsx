export default function Member({ member_image, member_name, member_job }) {
    return (
        <div className="item col-md-6 col-sm-6">
            <div className="wrap">
                <div className="cover">
                    <img src={member_image} alt="" />
                </div>
                <div className="info">
                    <div className="name">
                        {member_name}
                    </div>
                    <p className="title">{member_job}</p>
                </div>
            </div>
        </div>
    )
}
