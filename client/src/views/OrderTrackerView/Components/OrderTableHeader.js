import React from 'react'

const OrderTableHeader = () => {
    return (
        <div className="order-table-header">
            <div className="grid-item">
                <h1>MATERIAL</h1>
            </div>
            <div className="grid-item">
                <h1>HEIGHT (in)</h1>
            </div>
            <div className="grid-item">
                <h1>WIDTH (in)</h1>
            </div>
            <div className="grid-item">
                <h1>LENGTH (in)</h1>
            </div>
            <div className="grid-item">
                <h1>THICKNESS (in)</h1>
            </div>
            <div className="grid-item">
                <h1>COLOR</h1>
            </div>
            <div className="grid-item">
                <h1>edit</h1>
            </div>
        </div>
    )
}

export default OrderTableHeader
