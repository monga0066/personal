import React from 'react'
import Newsitem from './Newsitem'

export default function NewsList({state}) {
  return (
    <div>
      {state.map(e=>(<Newsitem key={e.id} {...e}/>))}
      
    </div>
  )
}
