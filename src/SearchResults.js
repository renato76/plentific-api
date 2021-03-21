import React, { useState } from 'react'
import ListPros from './ListPros'
import Pagination from './Pagination'

const SearchResults = ({ pros }) => {
  console.log(pros)

  const [currentPage, setCurrentPage] = useState(1)
  const [prosPerPage] = useState(20)

  const indexOfLastPro = currentPage * prosPerPage
  const indexofFirstPro = indexOfLastPro - prosPerPage
  const currentPros = pros.slice(indexofFirstPro, indexOfLastPro)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <ListPros pros={currentPros} />
      <Pagination prosPerPage={prosPerPage} totalPros={pros.length} paginate={paginate} />
    </div>
  )
}

export default SearchResults
