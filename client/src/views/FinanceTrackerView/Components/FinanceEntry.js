import React from 'react'

const FinanceEntry = (props) => {
    return (
        <div className="order-entry-wrapper">
            <div className="grid-item">
                <p>{props.name}</p>
            </div>
            <div className="grid-item">
                <p>{props.second}</p>
            </div>
            <div className="grid-item">
                <p>{props.third}</p>
            </div>
            <div className="grid-item">
                <p>{props.price}</p>
            </div>
            <div className="grid-item">
                <button className="edit-logo-btn"/>
            </div>
        </div>
    )
}

export default FinanceEntry
