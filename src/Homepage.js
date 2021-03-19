/* eslint-disable comma-dangle */
import React from 'react'
import { getAllCategories, getAllPros } from './lib/api'

class Homepage extends React.Component {

  state = {
    pros: [],
    categories: [],
    formData: {
      category_id: 1, 
      location: ''
    }
  }

  handlePostcode = event => {
    console.log(event.target.value)
    const formData = {
      ...this.state.formData,
      location: event.target.value
    } 
    console.log(formData)
    this.setState({ formData })
  }


  handleCategory = event => {
    const category = event.target.value
    console.log(category)
    const formData = {
      ...this.state.formData,
      category_id: category
    }
    console.log(formData)
    this.setState({ formData })
  }

  handleSubmit = async event => {
    // this should make the POST request using formData
    event.preventDefault()
    const response = await getAllPros(this.state.formData)
    console.log(response)
  }


  async componentDidMount() {
    const response = await getAllCategories()
    // console.log(response.data)
    const notHiddenCategories = response.data.filter(category => category.hidden === false)
    // console.log(notHiddenCategories)
    this.setState({
      categories: notHiddenCategories
    })
  }

  render() {
    const { categories } = this.state
    console.log(categories)
    return (
      <div className="container">
        <div className="homepage">
          <svg className="plentific"></svg>
        </div>
        {/* create a form with a dropdown of categories and an input field */}
        <form onSubmit={this.handleSubmit} className="form-container">
          <div className="category-container">
            <h2 className="category-label">Category</h2>
            <div className="category-dropdown">
              <select onChange={this.handleCategory}>
                {categories.map((category, id) => 
                  <option 
                    key={id} 
                    name={category.name} 
                    value={category.id}>{category.name}
                  </option>
                )}
              </select>
            </div>
          </div> 
          <div className="postcode-container">
            <h2 className="postcode-label">Postcode</h2>
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
          <div className="submit-container">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
            
        {/* then setstate of formdata with these values */}
        {/* then onsubmit can be when you make the actual request */}
      </div>
    )
  }
}

export default Homepage