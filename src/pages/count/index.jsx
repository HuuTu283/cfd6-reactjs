import React, { useEffect, useState } from 'react'

export default function CountDown() {
    const [count, setCount] = useState(100)
    useEffect(() => {
        console.log("auto")
        setTimeout(() => {
            setCount(count - 1)
        }, 1000);

        return () => {
            console.log("call-back")
        }
    }, [])

    return (
        <div>
            <h1 style={{ fontSize: 100, margin: 200 }}> {count} Coutdown</h1>
        </div>
    )
}

