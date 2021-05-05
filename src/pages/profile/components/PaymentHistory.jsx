

export default function PaymentHistory({ name, date, money }) {
    return (
        <div className="item itemhistory">
            <div className="name">{name}</div>
            <div className="date">{date}</div>
            <div className="money">{money}</div>
        </div>
    )
}
