

import React, { useContext } from 'react'
import MyContext from './Context'
export const Comsumer = () => {
    const {count,handler}=useContext(MyContext)

  return (
    <div>
        
      

        <h1>  Comsumer</h1>

           <h2>{count}</h2>

           <button onClick={handler}>click</button>
    </div>
  )
}
