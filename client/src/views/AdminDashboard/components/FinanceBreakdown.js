import React from 'react'
import expense from './expense.png'
import revenue from './revenue.png'

const FinanceBreakdown = () => {
    return (
        <div className="finance-breakdown-wrapper">
            <div className="finance-breakdown-header">
                {/* dropdown placeholder */}
                <div className="finance-dropdown">
                    <p>AUGUST 2021</p>
                    <p>v</p>
                </div>
                <button className="view-breakdown-btn">VIEW BREAKDOWN</button>
            </div>
            <div className="finance-summary">
                <div className="expense-summary">
                    <h2>EXPENSES</h2>
                    <div className="expense-display">
                        <h1>P50,000.00</h1>
                        <img src={expense} alt="expense logo" className="finance-logo"/>
                    </div>
                </div>
                <div className="expense-summary">
                    <h2>REVENUE</h2>
                    <div className="expense-display">
                        <h1>P50,000.00</h1>
                        <img src={revenue} alt="revenue logo" className="finance-logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinanceBreakdown
