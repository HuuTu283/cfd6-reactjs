

export default function Teacher({ ava, name, title, intro, link }) {
    return (
        <>
            <h3 className="title">Người dạy</h3>
            <div className="teaches">
                <div className="teacher">
                    <div className="avatar">
                        <img src={ava} alt="" />
                    </div>
                    <div className="info">
                        <div className="name">{name}</div>
                        <div className="title">{title}</div>
                        <p className="intro">
                            {intro}
                        </p>
                        <p><strong>Website:</strong> <a href="#">{link}</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
