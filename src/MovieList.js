import React from 'react'
import './App.css'
const MovieList = (props) => {
  return (
    <div className='item'>      
    {
        props.list.map((i) => {
          return (
            <img src={i.Poster} width='500px'  height={700} style={{margin:'10px',padding:"10px"}}></img>
          )
        })
      }

    </div>
  )
}

export default MovieList