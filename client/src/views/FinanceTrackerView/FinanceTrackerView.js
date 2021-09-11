import React from 'react'
import './Components/FinanceTrackerView.css'
import NavBar from '../NavBar/Navbar'
import ExpensesTracker from './Components/ExpensesTracker'
import RevenueTracker from './Components/RevenueTracker'

const FinanceTrackerView = () => {
    return (
        <div>
            <NavBar/>
            <div className="main-wrapper">

                <div className="title-div">
                    <div className="title-date">
                        <h1 className="title-name">FINANCE TRACKER</h1>
                        <h2 className="title-date-header">AUGUST 2021</h2>
                    </div>
                    <button className="save-btn">SAVE</button>
                </div>

                <div className="double-wrapper">
                    <div className="card1">
                        <ExpensesTracker/>
                    </div>

                    <div className="card2">
                        <RevenueTracker/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FinanceTrackerView
