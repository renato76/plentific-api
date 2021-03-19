/* eslint-disable comma-dangle */
import React from 'react'
import { getAllCategories } from './lib/api'

class Homepage extends React.Component {

  state = {
    pros: [],
    formData: {
      category_id: null, 
      location: ''
    }
  }

  handlePostcode = event => {
    console.log(event.target)
  }

  handleCategory = event => {
    console.log(event.target.value)
  }


  async componentDidMount() {
    const response = await getAllCategories()
    // console.log(response.data)
    const notHiddenCategories = response.data.filter(category => category.hidden === false)
    console.log(notHiddenCategories)
  }

  render() {
    return (
      <div className="container">
        <div className="homepage">
          <svg className="plentific"></svg>
        </div>
        {/* create a form with a dropdown of categories and an input field */}
        <form onSubmit={this.handleSubmit} className="form-container">
          <div className="category-container">
            <h2 className="category-label">Category</h2>
            <select onChange={this.handleCategory}>           
              <option name="1"value={1} className="option">Plumber</option>
              <option name="2"value={2} className="option">Cleaner</option>
              <option name="3"value={3} className="option">Electrician</option>
              <option name="4"value={4} className="option">Bricklayer</option>
              <option name="5"value={5} className="option">Builder</option>
              <option name="6"value={6} className="option">Buying Agent</option>
              <option name="7"value={7} className="option">Carpenter / Joiner</option>
              <option name="8"value={8} className="option">Flooring Specialists</option>
              <option name="9"value={9} className="option">Furniture Specialist</option>
              <option name="10"value={10} className="option">Glazier</option>
              <option name="11"value={11} className="option">Handyman</option>
              <option name="12"value={12} className="option">Heating / Boiler Engineer</option>
              <option name="13"value={13} className="option">Home Automation Specialist</option>
              <option name="14"value={14} className="option">Interior Designer</option>
            </select>       
          </div> 
          <div className="location-container">
            <h2 className="location-label">Postcode</h2>
            <div className="control">
              <input
                className="form-input"
                placeholder="SW11"
                name=""
                // value={}
                onChange={this.handlePostcode}
              />
            </div>
          </div>
        </form>
            
        {/* then setstate of formdata with these values */}
        {/* then onsubmit can be when you make the actual request */}
      </div>
    )
  }
}

export default Homepage