import React from 'react'
import StarRatings from 'react-star-ratings'

const ListPros = (props) => {
  const searchResults = props.pros
  console.log(searchResults)
  // const id = props.data.id
  
  const renderTableData = () => {
    return searchResults.map((pro, index) => {
      return (
        <tr key={index}>
          <td>{pro.id}</td>
          <td>{pro.name}</td>
          <td>{pro.main_address.postcode}</td>
          <td>
            <StarRatings
              rating={pro.review_rating}
              starRatedColor="black"
              numberOfStars={5}
              starDimension="15px"
              starSpacing="1px"
              name='rating'
            />
          </td>
        </tr>
      )
    })
  }

  return (
    <div className="table-rows-container">
      <table className='table-rows'>
        <tbody>
          {props.pros.length > 0 && <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Post Code</th>
            <th>Review Rating</th>
          </tr>
          }
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
}

export default ListPros
