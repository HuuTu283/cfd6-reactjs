

export default function AnotherMember({ AnotherMember_image, AnotherMember_name, title }) {
    return (
        <div className="item col-md-3 col-sm-4 col-xs-6">
            <div className="wrap">
                <div className="cover">
                    <img src={AnotherMember_image} alt="" />
                </div>
                <div className="info">
                    <div className="name">
                        {AnotherMember_name}
                    </div>
                    <p className="title">{title}</p>
                </div>
            </div>
        </div>
    )
}
