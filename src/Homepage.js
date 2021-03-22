/* eslint-disable comma-dangle */
import React from 'react'
import { getAllCategories, getAllPros } from './lib/api'
import SearchResults from './SearchResults'

class Homepage extends React.Component {

  state = {
    pros: [],
    categories: [],
    formData: {
      category_id: 1 || null, 
      location: '' || null
    },
    errorMessage: ''
  }

  handlePostcode = event => {
    // console.log(event.target.value)
    const formData = {
      ...this.state.formData,
      location: event.target.value
    } 
    // console.log(formData)
    this.setState({ formData })
  }


  handleCategory = event => {
    const category = event.target.value
    const formData = {
      ...this.state.formData,
      category_id: category
    }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    // this should make the POST request using formData
    event.preventDefault()
    try {
      const response = await getAllPros(this.state.formData)

      // this is the search data returned from API
      const searchResults = response.data.response.pros
      // console.log(response)

      // I set state of pros to search results but also had to set state of error message to null
      // so that when you correct an error and actually load data, the error message disappears
    
      this.setState({
        pros: searchResults,
        errorMessage: ''
      })
    } catch (err) {
      const errorMessage = err.response.data.message
      // console.log(errorMessage)
      this.setState({
        errorMessage: errorMessage,
      })
    }
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
    const { categories, pros, errorMessage } = this.state
    // console.log(this.state)

    return (
      <div className="container">
        <div className="homepage">
          <svg className="plentific"></svg>
        </div>
        {/* create a form with a dropdown of categories and an input field for the postcode */}
        <div className="results-container">
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form">
              <div className="category-container">
                <h2 className="category-label">Category</h2>
                <div className="category-dropdown">
                  <select className="select" onChange={this.handleCategory}>
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
                    className={`form-input ${errorMessage ? 'is-danger' : ''}`}
                    placeholder="Eg. SW11"
                    name=""
                    onChange={this.handlePostcode}
                    error={errorMessage}
                  />
                </div>
                { errorMessage && <p className="help">{(errorMessage).slice(9)}</p> }
                {/* using the in-built error handling from the backend, only sliced it to shorten / tidy up the message*/}
              </div>
              <div className="submit-container">
                <button type="submit" className="submit-btn">Submit</button>
              </div>
            </form>
          </div>
          {/* check there is no error message and send pros data to ListPros component */}
          { !errorMessage && 
            <div className="results-page">
              <SearchResults pros={pros} />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Homepage