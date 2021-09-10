import React from 'react'
import NavBar from '../NavBar/Navbar'
import './components/AdminDashboard.css'
import OngoingOrders from './components/OngoingOrders'
import OrderTracker from './components/OrderTracker'
import MonthlyIncome from './components/MonthlyIncome'
import FinanceBreakdown from './components/FinanceBreakdown'

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
                        <MonthlyIncome />
                    </div>
                    <div className="item3">
                        <FinanceBreakdown/>
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
