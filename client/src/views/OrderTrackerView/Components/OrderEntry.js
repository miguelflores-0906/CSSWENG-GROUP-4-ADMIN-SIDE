import React from 'react'
import logo from './edit-icon.png'

const OrderEntry = () => {
    return (
        <div className="order-entry-wrapper">
            <div className="grid-item">
                <p>GLASS</p>
            </div>
            <div className="grid-item">
                <p>20</p>
            </div>
            <div className="grid-item">
                <p>20</p>
            </div>
            <div className="grid-item">
                <p>5</p>
            </div>
            <div className="grid-item">
                <p>2</p>
            </div>
            <div className="grid-item">
                <p>BROWN</p>
            </div>
            <div className="grid-item">
                {/* <img src={logo} alt="edit" className="edit-logo-btn"/> */}
                <button className="edit-logo-btn"/>
            </div>
        </div>
    )
}

export default OrderEntry
