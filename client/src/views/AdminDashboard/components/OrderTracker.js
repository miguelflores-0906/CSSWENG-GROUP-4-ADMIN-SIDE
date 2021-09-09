import React from 'react'
import Order from './Order'

const OrderTracker = () => {

    // const [orders, setOrders] = useState("No Orders Yet")

    // TODO: archive order that are finished

    /**This is used to update the front end once there is a
     * response from the database that there are orders, Otherwise
     * the list will simply say "No Orders Yet"
    */

    // const updateOrders = (orderArray) => setOrders(orderArray.data.reverse().map((order, index) => {
    //     return (
    //         <Order
    //             contact = {order.contact}
    //             location = {order.location}
    //             status = {order.status}
    //         />
    //     )
    // }))

    /** This is to asynchronously update the frontend 
     * while it continuously requests for orders from
     * the backend
     */
    // useEffect(() => {
    //     axios.post('http://localhost:5000/getOrder')
    //         .then(res => {
    //             updateOrders(res)
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    // }, [])


    return (
        <div className="order-tracker-wrapper">
            <div className="order-header">
                <h1>ORDER TRACKER</h1>
                <button className="add-order-btn"> +  ADD ORDER</button>
            </div>
            <div className="order-table-header">
                <p>CONTACT PERSON</p>
                <p>LOCATION</p>
                <p>ORDER STATUS</p>
            </div>
            {/* <div>
                <ul>
                    {orders}
                </ul>
            </div> */}
            <Order/>
            <Order/>
            <Order/>
            <Order/>
            <Order/>
            <Order/>
        </div>
    )
}

export default OrderTracker
