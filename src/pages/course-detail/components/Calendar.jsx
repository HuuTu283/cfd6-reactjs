import React from 'react'

export default function Calendar({ date, time }) {
    return (
        <>
            <h3 className="title">
                <div className="date-start">lịch học</div>
                <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
            </h3>
            <p>
                <strong>Ngày bắt đầu: </strong> {date} <br />
                <strong>Thời gian học: </strong> {time}
            </p>
        </>
    )
}
