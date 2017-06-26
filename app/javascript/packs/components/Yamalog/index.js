import React, { PropTypes } from 'react'

const Yamalog = ({hiking_date, mountain_name}) => {
  return (
    <div>
      <h2>{mountain_name}</h2>
      <span>{hiking_date}</span>
    </div>
  )
}

export default Yamalog
