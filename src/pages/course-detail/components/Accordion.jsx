

export default function Accordion({ date, intro, content }) {
    return (

        <div className="accordion">
            <div className="accordion__title">
                <div className="date">Ngày {date}</div>
                <h3>{intro}</h3>
            </div>
            <div className="content">
                {content}
            </div>
        </div>


    )
}
