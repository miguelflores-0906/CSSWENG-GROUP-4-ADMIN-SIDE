import React from 'react'

const OrderStatus = () => {
    return (
        <div className="status-wrapper">
            <div className="status-component-wrapper">
                <h1>STATUS: </h1>
                <p>ONGOING</p>
            </div>
            <div className="status-component-wrapper">
                <button className="delete-btn">DELETE</button>
                <button className="save-btn">SAVE</button>
            </div>
        </div>
    )
}

export default OrderStatus
