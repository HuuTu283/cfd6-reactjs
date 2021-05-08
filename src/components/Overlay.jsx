import React from 'react'
import ReactDOM from 'react-dom'

export function Overlay() {
    return ReactDOM.createPortal(
        <div className="overlay_nav"></div>,
        document.body
    )
}
