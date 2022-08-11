import React from 'react'

import './Loader.css'

const Loader = () => {
  return (
    <div className='loading'>
        <img src={process.env.PUBLIC_URL + "/loading.gif"} alt="loading" />
    </div>
  )
}

export default Loader