import React from 'react'
import './forms.css'
import {Link} from 'react-router-dom'

const AddItem = () => {
    return (
        <div>
            <div className="form-card">
                <h1>ADD ITEM</h1>
                <form id="addItem" className="form-wrapper">
                    <label>MATERIAL:</label>
                    <select id="add-material" name="add-material">
                        <option value="glass">GLASS</option>
                        <option value="aluminum">ALUMINUM</option>
                    </select>
                    <br/>
                    <label>HEIGHT (in):</label>
                    <input type="text" name="add-item-height"/>
                    <br/>
                    <label>WIDTH (in):</label>
                    <input type="text" name="add-item-width"/>
                    <br/>
                    <label>LENGTH (in):</label>
                    <input type="text" name="add-item-length"/>
                    <br/>
                    <label>THICKNESS (in):</label>
                    <input type="text" name="add-item-thickness"/>
                    <br/>
                    <label>COLOR:</label>
                    <input type="text" name="add-item-color"/>
                    <br/>
                    <label>QUANTITY:</label>
                    <input type="text" name="add-item-qty"/>
                    <br/>
                </form>
                <div className="form-buttons">
                    <Link to='/order'>
                        <button className="delete-btn">CANCEL</button>
                    </Link>
                    <button className="save-btn" type="submit" form="addRevenue">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default AddItem
