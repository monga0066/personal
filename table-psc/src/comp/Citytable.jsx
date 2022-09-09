import React from 'react'
import Citycard from './Citycard'
export default function Citytable({data}) {
  return (
    <div>
        <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Population</th>
          <th>Country</th>
        </tr>
     
      {data.map((item)=>(
        <Citycard {...item} />
      ))}
       </table>
    </div>
  )
}
