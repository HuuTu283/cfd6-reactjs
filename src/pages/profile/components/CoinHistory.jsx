

export default function CoinHistory({ coin, time, content, status }) {
    return (
        <div className="itemhistory">
            {
                coin === 'red' ? <div className="td"><span className="coin red">-300</span></div> :
                    <div className="td"><span className="coin">+300</span></div>
            }
            <div className="td">{time}</div>
            <div className="td">{content}</div>
            <div className="td">{status}</div>
        </div>
    )
}
