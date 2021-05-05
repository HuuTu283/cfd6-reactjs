

export default function AboutCoin({ title, children }) {
    return (
        <div className="section">
            <h2>{title}</h2>
            {children}
        </div>
    )
}
