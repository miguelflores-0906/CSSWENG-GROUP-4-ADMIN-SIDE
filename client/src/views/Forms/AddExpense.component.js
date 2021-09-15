import React, {useState, useContext, Component} from 'react'
//import { GlobalContext } from './context/GlobalState';
import axios from 'axios';
import './forms.css'
import {Link} from 'react-router-dom'


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
        price: '',
        errorMsg: '',
        goodMsg: ''
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

      if (this.state.price < 0 || this.state.price === '') {
        this.setState({errorMsg: "Price must be greater than or equal to zero."});
      }
      else if (this.state.name === '') {
        this.setState({errorMsg: "Name must not be empty. Please enter a short but descriptive name."});
      }
      else if (this.state.supplier === '') {
        this.setState({errorMsg: "Supplier must not be empty. Please enter the name of the supplier."});
      }
      else if (this.state.receiptno === '') {
        this.setState({errorMsg: "Receipt No. must not be empty. Please enter a receipt number or type 'n/a'."});
      }
      else {
        axios.post('http://localhost:3000/expenses/create-expense', expenseObject)
          .then(res => console.log(res.data));

        this.setState({errorMsg: ""})
        this.setState({goodMsg: "Expense added successfully."});
        this.setState({ name: '', supplier: '', receiptno: '', price: '' })
        this.props.history.push("/finance")
      }
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
          <Link style={{textDecoration: 'none'}} to="/finance">
            <button className="delete-btn">CANCEL</button>
          </Link>
          <button className="save-btn" type="submit" form="addExpense">ADD</button>
        </div>
        <p className="error-message">{this.state.errorMsg}</p>
        <p className="good-message">{this.state.goodMsg}</p>
      </div>);
    }
  }



