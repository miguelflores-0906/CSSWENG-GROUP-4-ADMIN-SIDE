import React from 'react'
import graph from './graph.png'

const MonthlyIncome = () => {
    return (
        <div className="monthly-income-wrapper">
            <h1>Monthly Income</h1>
            <img src={graph} alt="graph"/>
        </div>
    )
}

export default MonthlyIncome
