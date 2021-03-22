import React, { useState } from 'react'
import ListPros from './ListPros'
import Pagination from './Pagination'

const SearchResults = ({ pros }) => {
  // console.log(pros)

  const [currentPage, setCurrentPage] = useState(1)
  const [prosPerPage] = useState(20)

  // take the full search results and display only 20 items per page
  const indexOfLastPro = currentPage * prosPerPage
  const indexofFirstPro = indexOfLastPro - prosPerPage
  // this will slice 20 results at a time (per page)
  const currentPros = pros.slice(indexofFirstPro, indexOfLastPro)

  // const previous = () => setCurrentPage(currentPage - 1)

  return (
    <>
      <div>
        <ListPros pros={currentPros} />
        <Pagination 
          prosPerPage={prosPerPage} 
          totalPros={pros.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
      </div>
    </>
  )
}

export default SearchResults
