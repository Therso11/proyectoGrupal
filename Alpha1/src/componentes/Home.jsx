import React from 'react'
import datos from '../../datos'
import Card from './Card'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
        <div>
            {datos.map((dato)=>{
                return(
                    <Card name={dato.name} price={dato.price} id={dato.id}/>
                )
                
            })}
        </div>
    </div>
  )
}

export default Home
