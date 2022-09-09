import React, { useEffect, useState } from 'react'
import {getnews} from '../api'
import NewsList from './NewsList'

export default function News() {
const[state,setstate]=useState([])
useEffect(()=>{
  getnews()
   .then((res)=>{
     console.log(res)
     setstate(res.results)
   })
  .catch(err=>{
    console.log(err)
  })
})
  return (
  <>
  
  <h1>News</h1>


    <div className='container'>
    
      <NewsList state={state} />
    </div>
   

    </>
  )
}
