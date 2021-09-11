import React from 'react'

const OrderFooter = () => {
    return (
        <div>
            <div className="order-footer">
                <button className="edit-order-btn">+ ADD ITEM</button>

                <div className="payment-div">

                    <h1>PAYMENT DETAILS: </h1>

                    <select name="payment-details" className="payment-details">
                        <option value="fifty-downpayment">50% DOWNPAYMENT</option>
                        <option value="fully-paid">FULLY PAID</option>
                    </select>

                </div>

            </div>
        </div>
    )
}

export default OrderFooter
