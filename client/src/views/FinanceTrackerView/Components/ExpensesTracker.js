import React from 'react'
import { useState, useEffect } from 'react'
import FinanceEntry from './FinanceEntry'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ExpensesTracker = () => {

    const [expenses, setExpenses] = useState("")

    const [totalExpense, setTotalExpense] = useState("50,000.00")

    const updateExpenses = (expenseArray) => setExpenses(expenseArray.data.map((expense, index) => {
        return (
            <FinanceEntry 
                name = {expense.name} 
                second = {expense.supplier}
                third = {expense.receiptno}
                price = {expense.price}
            />
        )
    }))

    const updateTotal = (expenseArray) => setTotalExpense("kekw")

    useEffect(() => {
        axios.get('http://localhost:3000/expenses/')
            .then(res => {
                console.log(res)
                updateExpenses(res)
                console.log(res.data.reverse())
            })
            .catch(err => {
                console.error(err.response.data)
            })
    }, [])


    return (
        <div className="card-wrapper">
            <h1 className="finance-card-title">EXPENSES</h1>
            <div className="finance-header">
                <div className="grid-item">
                    <h1>NAME</h1>
                </div>
                <div className="grid-item">
                    <h1>SUPPLIER</h1>
                </div>
                <div className="grid-item">
                    <h1>RECEIPT NO.</h1>
                </div>
                <div className="grid-item">
                    <h1>PRICE</h1>
                </div>
                <div className="grid-item">
                    <h1>EDIT</h1>
                </div>
            </div>
            <div className="entries">
                <ul>
                    {expenses}
                </ul>
            </div>
            <hr/>
            <div className="finance-footer">
                <Link style={{textDecoration: 'none', marginTop: '1em'}} to="/addExpense">
                    <button className="finance-btn">+ ADD EXPENSE</button>
                </Link>
                <div className="finance-footer-text">
                    <h1>TOTAL: P</h1>
                    <h1>{totalExpense}</h1>
                </div>
            </div>
        </div>
    )
}

export default ExpensesTracker
