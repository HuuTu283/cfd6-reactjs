

export default function TestimonialItem({ name, title, content, date }) {
    return (
        <>
            <div className="info">
                <div className="name">
                    <h4>{name}</h4>
                    <p>{title}</p>
                </div>
                <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
            </div>
            <div className="content">
                {content}
            </div>
            <div className="bottom">
                <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                <span>{date}</span>
            </div>
        </>
    )
}
