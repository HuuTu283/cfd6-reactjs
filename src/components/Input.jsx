

export function Input({ title, type, value }) {
    return (
        <label>
            <p>{title}<span>*</span></p>
            <input type={type} placeholder={value} />
        </label>
    )
}
