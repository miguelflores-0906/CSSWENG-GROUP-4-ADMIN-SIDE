import React, {useState, useContext, Component} from 'react'
import axios from 'axios';
import './forms.css'

export default class AddRevenue extends Component{

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeRevenueName = this.onChangeRevenueName.bind(this);
        this.onChangeRevenuePayment = this.onChangeRevenuePayment.bind(this);
        this.onChangeRevenueClient = this.onChangeRevenueClient.bind(this);
        this.onChangeRevenuePrice= this.onChangeRevenuePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          payment: '',
          client: '',
          price: ''
        }
      }
    
      onChangeRevenueName(e) {
        this.setState({ name: e.target.value })
      }
    
      onChangeRevenuePayment(e) {
        this.setState({ payment: e.target.value })
      }
    
      onChangeRevenueClient(e) {
        this.setState({ client: e.target.value })
      }
  
      onChangeRevenuePrice(e) {
          this.setState({ price: e.target.value })
        }
    
      onSubmit(e) {
        e.preventDefault()
    
        const revenueObject = {
          name: this.state.name,
          payment: this.state.payment,
          client: this.state.client,
          price: this.state.price
        };
        axios.post('http://localhost:3000/revenues/create-revenue', revenueObject)
          .then(res => console.log(res.data));
    
        this.setState({ name: '', payment: '', client: '', price: '' })
      }

    render() {
    return (
        <div>
            <div className="form-card">
                <h1>ADD REVENUE</h1>
                <form id="addRevenue" className="form-wrapper" onSubmit={this.onSubmit}>
                    <label>NAME:</label>
                    <input type="text" name="revenue-name" value={this.state.name} onChange={this.onChangeRevenueName}/>
                    <br/>
                    <label>PAYMENT (PARTIAL / FULL):</label>
                    <input type="text" name="revenue-payment" value={this.state.payment} onChange={this.onChangeRevenuePayment}/>
                    <br/>
                    <label>CLIENT:</label>
                    <input type="text" name="revenue-client" value={this.state.client} onChange={this.onChangeRevenueClient}/>
                    <br/>
                    <label>PRICE:</label>
                    <input type="text" name="revenue-price" value={this.state.price} onChange={this.onChangeRevenuePrice}/>
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
}
