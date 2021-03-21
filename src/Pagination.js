import React from 'react'

const Pagination = ({ prosPerPage, totalPros, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPros / prosPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="!#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
