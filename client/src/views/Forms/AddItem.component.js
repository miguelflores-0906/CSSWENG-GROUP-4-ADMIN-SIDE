import React, {useState, useContext, Component} from 'react'
//import { GlobalContext } from './context/GlobalState';
import axios from 'axios';
import './forms.css'

export default class AddItem extends Component{

    constructor(props) {
        super(props)

        // Setting up functions
      this.onChangeMaterial = this.onChangeMaterial.bind(this);
      this.onChangeHeight = this.onChangeHeight.bind(this);
      this.onChangeWidth = this.onChangeWidth.bind(this);
      this.onChangeLength = this.onChangeLength.bind(this);
      this.onChangeThickness = this.onChangeThickness.bind(this);
      this.onChangeColor = this.onChangeColor.bind(this);
      this.onChangeQuantity = this.onChangeQuantity.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      // Setting up state
      this.state = {
        material: '',
        height: '',
        width: '',
        length: '',
        thickness: '',
        color: '',
        quantity: ''
      }
    }

    onChangeMaterial(e) {
        this.setState({ material: e.target.value })
      }
    
      onChangeHeight(e) {
        this.setState({ height: e.target.value })
      }
    
      onChangeWidth(e) {
        this.setState({ width: e.target.value })
      }
  
      onChangeLength(e) {
          this.setState({ length: e.target.value })
        }
        
      onChangeThickness(e) {
          this.setState({ thickness: e.target.value })
        }

      onChangeColor(e) {
            this.setState({ color: e.target.value })
          }
        
      onChangeQuantity(e) {
            this.setState({ quantity: e.target.value })
          }
        
      onSubmit(e) {
        e.preventDefault()
    
        const orderObject = {
          material: this.state.material,
          height: this.state.height,
          width: this.state.width,
          length: this.state.length,
          thickness: this.state.thickness,
          color: this.state.color,
          quantity: this.state.quantity
        };
        axios.post('http://localhost:3000/orders/create-order', orderObject)
          .then(res => console.log(res.data));
    
        this.setState({ material: '', height: '', width: '', length: '', thickness: '', color: '', quantity: '' })
      }

render() {
    return (
        <div>
            <div className="form-card">
                <h1>ADD ITEM</h1>
                <form id="addItem" className="form-wrapper" onSubmit={this.onSubmit}>
                    <label>MATERIAL (GLASS / ALUMINUM):</label>
                    <input type="text" name="add-item-material" value={this.state.material} onChange={this.onChangeMaterial}/>
                    <br/>
                    <label>HEIGHT (in):</label>
                    <input type="text" name="add-item-height" value={this.state.height} onChange={this.onChangeHeight}/>
                    <br/>
                    <label>WIDTH (in):</label>
                    <input type="text" name="add-item-width" value={this.state.width} onChange={this.onChangeWidth}/>
                    <br/>
                    <label>LENGTH (in):</label>
                    <input type="text" name="add-item-length" value={this.state.length} onChange={this.onChangeLength}/>
                    <br/>
                    <label>THICKNESS (in):</label>
                    <input type="text" name="add-item-thickness" value={this.state.thickness} onChange={this.onChangeThickness}/>
                    <br/>
                    <label>COLOR:</label>
                    <input type="text" name="add-item-color" value={this.state.color} onChange={this.onChangeColor}/>
                    <br/>
                    <label>QUANTITY:</label>
                    <input type="text" name="add-item-qty" value={this.state.quantity} onChange={this.onChangeQuantity}/>
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
