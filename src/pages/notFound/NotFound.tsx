import React from 'react'
import { Link } from 'react-router-dom'

import './notFound.css'

const Port = () => {
    
    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className="not__container place__items__center">
        <h1>Page Not Found</h1>
        <p style={{color: 'yellow'}}>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export default Port