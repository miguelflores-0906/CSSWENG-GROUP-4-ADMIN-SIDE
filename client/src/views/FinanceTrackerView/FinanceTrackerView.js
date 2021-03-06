import React from 'react'
import './Components/FinanceTrackerView.css'
import NavBar from '../NavBar/Navbar'
import ExpensesTracker from './Components/ExpensesTracker'
import RevenueTracker from './Components/RevenueTracker'
import {Link} from 'react-router-dom'

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
                    <Link style={{marginTop: '5.6em'}} to="/">
                        <button className="save-btn">SAVE</button>
                    </Link>
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
