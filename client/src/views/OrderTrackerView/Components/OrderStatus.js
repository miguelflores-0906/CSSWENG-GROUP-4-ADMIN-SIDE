import React from 'react'
import {Link} from 'react-router-dom'

const OrderStatus = () => {
    return (
        <div className="status-wrapper">
            <div className="status-component-wrapper">
                <h1>STATUS: </h1>
                <p>ONGOING</p>
            </div>
            <div className="status-component-wrapper">
                <Link to='/' style={{marginTop: '3em'}}>
                    <button className="delete-btn">DELETE</button>
                </Link>

                
                <Link to='/' style={{marginTop: '3em'}}>
                    <button className="save-btn">SAVE</button>
                </Link>
            </div>
        </div>
    )
}

export default OrderStatus
