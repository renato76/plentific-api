import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

function Spinner() {
  return (
    <div className="loading">
      <Loader type="TailSpin" color="#151515" height="20" width="20" />
    </div>
  )
}

export default Spinner