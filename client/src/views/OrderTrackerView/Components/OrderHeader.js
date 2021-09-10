import React from 'react'

const OrderHeader = () => {
    return (
        <div className="order-header-main-wrapper">
            <div className="header-component">
                <h1>CLIENT: </h1>
                <p>Juan De La Cruz</p>
            </div>
            <div className="header-component">
                <h1>LOCATION: </h1>
                <p>Malate, Manila</p>
            </div>
            <button className="edit-order-btn">EDIT</button>
        </div>
    )
}

export default OrderHeader
