import React from 'react'
import FinanceEntry from './FinanceEntry'
import {Link} from 'react-router-dom'

const RevenueTracker = () => {
    return (
        <div className="card-wrapper">
            <h1 className="finance-card-title">REVENUE</h1>
            <div className="finance-header">
                <div className="grid-item">
                    <h1>NAME</h1>
                </div>
                <div className="grid-item">
                    <h1>PAYMENT</h1>
                </div>
                <div className="grid-item">
                    <h1>CLIENT</h1>
                </div>
                <div className="grid-item">
                    <h1>PRICE</h1>
                </div>
                <div className="grid-item">
                    <h1>EDIT</h1>
                </div>
            </div>
            <FinanceEntry/>
            <FinanceEntry/>
            <FinanceEntry/>
            <FinanceEntry/>
            <FinanceEntry/>
            <FinanceEntry/>
            <FinanceEntry/>
            <FinanceEntry/>
            <hr/>
            <div className="finance-footer">

                <Link style={{textDecoration: 'none', marginTop: '1em'}} to="/addExpense">
                    <button className="finance-btn">+ ADD REVENUE</button>
                </Link>
                <div className="finance-footer-text">
                    <h1>TOTAL: P</h1>
                    <h1>50,000.00</h1>
                </div>
            </div>
        </div>
    )
}

export default RevenueTracker

