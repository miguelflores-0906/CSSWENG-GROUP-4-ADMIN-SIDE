import React from 'react'
import './forms.css'

const AddExpense = () => {
    return (
        // <div className="overall-wrapper">
            <div className="form-card">
                <h1>ADD EXPENSE</h1>
                <form id="addExpense" className="form-wrapper">
                    <label>NAME:</label>
                    <input type="text" name="expense-name"/>
                    <br/>
                    <label>SUPPLIER:</label>
                    <input type="text" name="expense-supp"/>
                    <br/>
                    <label>RECEIPT NO:</label>
                    <input type="text" name="expense-receipt"/>
                    <br/>
                    <label>PRICE:</label>
                    <input type="text" name="expense-price"/>
                    <br/>
                </form>
                <div className="form-buttons">
                    <button className="delete-btn">CANCEL</button>
                    <button className="save-btn" type="submit" form="addExpense">ADD</button>
                </div>
            </div>
        // </div>
    )
}

export default AddExpense
