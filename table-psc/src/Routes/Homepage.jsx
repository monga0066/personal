import {useState,useEffect} from 'react'
import Citytable from '../comp/Citytable'


const getcities =()=>{
  return fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants")
  .then(res=>res.json())
}

export default function Homepage() {
  const[loading,setloading]=useState(false)
  const[data,setdata]=useState([])
  const[sortBy,setsortBy]=useState("ASC")

  useEffect(()=>{
    setloading(true)
    getcities()
    .then((res)=>{
      setloading(false)
      setdata(res)
    })
    .catch((err)=>{
      setloading(false)
     console.log(err)
    })
  },[])

  if(loading){
    return <h4>....Loading</h4>
  }
  
  return (
    <div>
      
    <Citytable data={data}/>
    </div>
  )
}
