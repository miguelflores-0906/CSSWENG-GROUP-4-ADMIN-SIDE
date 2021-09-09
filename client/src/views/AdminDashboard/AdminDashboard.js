import React from 'react'
import NavBar from '../NavBar/Navbar'
import './components/AdminDashboard.css'
import OngoingOrders from './components/OngoingOrders'
import OrderTracker from './components/OrderTracker'

const AdminDashboard = () => {
    return (
        <div>
            <NavBar/>
            <div className="admin-wrapper">
                <h1 className= "title ">ADMIN DASHBOARD</h1>
                <div className="grid-container">
                    <div className="item1">
                        <OrderTracker/>
                    </div>
                    <div className="item2">
                        Monthly Income <br/>
                        Monthly Income <br/>
                        Monthly Income <br/>
                        Monthly Income <br/>
                    </div>
                    <div className="item3">
                        Breakdown <br/>
                        Breakdown <br/>
                    </div>
                    <div className="item4">
                        <OngoingOrders/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
