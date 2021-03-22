import React from 'react'

// Previous button component
const Previous = ({ previous, disabled }) => {
  const onClick = (event) => disabled ? event.preventDefault() : previous()
  const className = `page-item ${disabled ? 'disabled' : ''}`

  return (
    <li className={className}>
      <a onClick={onClick} href="#" className="page-link">
        <i className="fa fa-chevron-left"></i>
      </a>
    </li>
  )
}

// Next button component
const Next = ({ next, disabled }) => {
  const onClick = (event) => disabled ? event.preventDefault() : next()
  const className = `page-item ${disabled ? 'disabled' : ''}`

  return (
    <li className={className}>
      <a onClick={onClick} href="#" className="page-link">
        <i className="fa fa-chevron-right"></i>
      </a>
    </li>
  )
}

// Pagination - creating page numbers using state passed from SearchResults
const Pagination = ({ prosPerPage, totalPros, currentPage, setCurrentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPros / prosPerPage); i++) {
    pageNumbers.push(i)
  }

  const previous = () => setCurrentPage(currentPage - 1)
  const next = () => setCurrentPage(currentPage + 1)

  // only do the Pagination once we have data
  if (pageNumbers.length === 0) {
    return <></>
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          <Previous previous={previous} disabled={currentPage === 1} />
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a onClick={() => setCurrentPage(number)} href="!#" className={`page-link ${number === currentPage ? 'active' : ''}`}>
                {number}
              </a>
            </li>
          ))}
          <Next next={next} disabled={currentPage === pageNumbers.length} />
        </ul>
      </nav>
    </div>
  )
}

export default Pagination

