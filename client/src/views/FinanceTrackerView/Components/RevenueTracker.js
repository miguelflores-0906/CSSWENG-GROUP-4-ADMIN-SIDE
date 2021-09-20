import React from 'react'
import { useState, useEffect } from 'react'
import FinanceEntry from './FinanceEntry'
import {Link} from 'react-router-dom'
import axios from 'axios'

const RevenueTracker = () => {

    const [revenues, setRevenues] = useState("")

    const [totalRevenue, setTotalRevenue] = useState("50,000.00")

    const updateRevenues = (revArray) => setRevenues(revArray.data.map((revenue, index) => {
        return (
            <FinanceEntry 
                name = {revenue.name}
                second = {revenue.payment}
                third = {revenue.client}
                price = {revenue.price}
            />
        )
    }))

    useEffect(() => {
        axios.get('http://localhost:3000/revenues/')
            .then(res => {
                console.log(res)
                updateRevenues(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
            <div className="entries">
                <ul>
                    {revenues}
                </ul>
            </div>
            <hr/>
            <div className="finance-footer">

                <Link style={{textDecoration: 'none', marginTop: '1em'}} to="/addRevenue">
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

