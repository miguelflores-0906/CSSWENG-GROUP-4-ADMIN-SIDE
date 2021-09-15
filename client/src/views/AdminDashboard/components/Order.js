import React from 'react'
import Ongoing from './Ongoing'
import Finished from './Finished'
import {Link} from 'react-router-dom'

const Order = () => {

    const styling = {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 4em',
        wdith: '42em'
    }

    return (
        <div className="order-wrapper">
            {/* <Link
            style={styling}
            to="/order"> */}
                {/* <div className="order-wrapper"> */}
                    <p>JUAN DELA CRUZ</p>
                    <p>QUEZON CITY</p>
                    <Finished/>
                {/* </div> */}
            {/* </Link> */}
        </div>
    )
}

export default Order
