import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
      <h2>{props.id}</h2>
    </div>
  )
}

export default Card
