import React from 'react'
import "../App.css"
export default function Newsitem({title,image_url}) {
  return (
    <>

    <div className='card' style={{width:'18rem'}}>
      <img className='card-img-top' src={image_url} alt="error"  />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
      <a href="#" className='btn btn-primary'>Read more</a>
      </div>
    </div>
    </>

  )
}
