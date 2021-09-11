import React from 'react'
import './Components/OrderTrackerView.css'
import NavBar from '../NavBar/Navbar'
import OrderHeader from './Components/OrderHeader'
import OrderTableHeader from './Components/OrderTableHeader'
import OrderEntry from './Components/OrderEntry'
import Others from './Components/Others'
import OrderFooter from './Components/OrderFooter'
import OrderStatus from './Components/OrderStatus'

const OrderTrackerView = () => {
    return (
        <div>
            <NavBar/>
            <div className="main-wrapper">
                <h1 className="title">ORDER TRACKER</h1>
                <div className="card-wrapper">
                    <OrderHeader />
                    <OrderTableHeader/>
                    <OrderEntry/>
                    <OrderEntry/>
                    <OrderEntry/>
                    <OrderEntry/>
                    <OrderEntry/>
                    <Others />
                    <OrderFooter />
                    <OrderStatus/>
                </div>
            </div>
        </div>
    )
}

export default OrderTrackerView
