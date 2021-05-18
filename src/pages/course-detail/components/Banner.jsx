export default function Banner({ title, date, time, money }) {
    return (
        <section className="banner style2" style={{ background: '#cde6fb' }}>
            <div className="container">
                <div className="info">
                    <h1>{title}</h1>
                    <div className="row">
                        <div className="date"><strong>Khai giảng:</strong> {date}</div>
                        <div className="time"><strong>Thời lượng:</strong> {time}</div>
                    </div>
                    <div className="btn white round" style={{ backgroundColor: '#70b6f1' }}>đăng ký</div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="video">
                        <div className="icon">
                            <img src="/img/play-icon-white.png" alt="" />
                        </div> <span>giới thiệu</span>
                    </div>
                    <div className="money">{money} VND</div>
                </div>
            </div>
        </section >
    )
};
