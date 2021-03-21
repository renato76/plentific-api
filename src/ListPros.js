import React from 'react'
import StarRatings from 'react-star-ratings'

const ListPros = (props) => {
  // console.log(props)
  // const id = props.data.id
  // const [currentPage, setCurrentPage] = useState(1)
  // const [postsPerPage, setPostsPerPage] = useState(20)
  
  const renderTableData = () => {
    return props.pros.map((pro, index) => {
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
          {/* <td>{(pro.review_rating).toFixed(2)}</td> */}
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
