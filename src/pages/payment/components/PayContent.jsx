

export default function PayContent({ title, content, children }) {
    return (
        <div className="section">
            <h2>{title}</h2>
            <p>{content}</p>
            {children}
        </div>
    )
}
