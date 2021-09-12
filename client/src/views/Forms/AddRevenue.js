import React from 'react'
import './forms.css'

const AddRevenue = () => {
    return (
        <div>
            <div className="form-card">
                <h1>ADD REVENUE</h1>
                <form id="addRevenue" className="form-wrapper">
                    <label>NAME:</label>
                    <input type="text" name="revenue-name"/>
                    <br/>
                    <label>PAYMENT:</label>
                    <select id="add-payment-option" name="add-payment-option">
                        <option value="partial">PARTIAL</option>
                        <option value="full">FULL</option>
                    </select>
                    <br/>
                    <label>CLIENT:</label>
                    <input type="text" name="revenue-client"/>
                    <br/>
                    <label>PRICE:</label>
                    <input type="text" name="revenue-price"/>
                    <br/>
                </form>
                <div className="form-buttons">
                    <button className="delete-btn">CANCEL</button>
                    <button className="save-btn" type="submit" form="addRevenue">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default AddRevenue
