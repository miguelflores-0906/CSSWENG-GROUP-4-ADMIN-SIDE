import React, {useState, useContext, Component} from 'react'
//import { GlobalContext } from './context/GlobalState';
import axios from 'axios';
import './forms.css'


export default class AddExpense extends Component{

    constructor(props) {
      super(props)
  
      // Setting up functions
      this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
      this.onChangeExpenseSupplier = this.onChangeExpenseSupplier.bind(this);
      this.onChangeExpenseReceiptno = this.onChangeExpenseReceiptno.bind(this);
      this.onChangeExpensePrice= this.onChangeExpensePrice.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      // Setting up state
      this.state = {
        name: '',
        supplier: '',
        receiptno: '',
        price: ''
      }
    }
  
    onChangeExpenseName(e) {
      this.setState({ name: e.target.value })
    }
  
    onChangeExpenseSupplier(e) {
      this.setState({ supplier: e.target.value })
    }
  
    onChangeExpenseReceiptno(e) {
      this.setState({ receiptno: e.target.value })
    }

    onChangeExpensePrice(e) {
        this.setState({ price: e.target.value })
      }
  
    onSubmit(e) {
      e.preventDefault()
  
      const expenseObject = {
        name: this.state.name,
        supplier: this.state.supplier,
        receiptno: this.state.receiptno,
        price: this.state.price
      };
      axios.post('http://localhost:3000/expenses/create-expense', expenseObject)
        .then(res => console.log(res.data));
  
      this.setState({ name: '', supplier: '', receiptno: '', price: '' })
    }
  
    render() {
      return (
      // <div className="form-wrapper">
      <div className="form-card">
        <h1>ADD EXPENSE</h1>
        <form id="addExpense" className="form-wrapper" onSubmit={this.onSubmit}>
            <label>NAME:</label>
            <input type="text" name="expense-name" value={this.state.name} onChange={this.onChangeExpenseName}/>
            <br/>
            <label>SUPPLIER:</label>
            <input type="text" name='expense-supp' value={this.state.supplier} onChange={this.onChangeExpenseSupplier}/>
            <br/>
            <label>RECEIPT NO:</label>
            <input type="text" name='expense-receipt' value={this.state.receiptno} onChange={this.onChangeExpenseReceiptno} />
            <br/>
            <label>PRICE:</label>
            <input type="text" name="expense-price" value={this.state.price} onChange={this.onChangeExpensePrice}/>
            <br/>
        </form>
        <div className="form-buttons">
          <button className="delete-btn">CANCEL</button>
          <button className="save-btn" type="submit" form="addExpense">ADD</button>
        </div>
      </div>);
    }
  }



