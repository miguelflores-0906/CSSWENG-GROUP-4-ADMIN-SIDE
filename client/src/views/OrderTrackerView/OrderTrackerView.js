import React from 'react'
import './Components/OrderTrackerView.css'
import NavBar from '../NavBar/Navbar'
import OrderHeader from './Components/OrderHeader'

const OrderTrackerView = () => {
    return (
        <div>
            <NavBar/>
            <div className="main-wrapper">
                <h1 className="title">ORDER TRACKER</h1>
                <div className="card-wrapper">
                    <OrderHeader />
                </div>
            </div>
        </div>
    )
}

export default OrderTrackerView
