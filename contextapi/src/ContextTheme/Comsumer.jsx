

import React, { useContext } from 'react'
import MyContext from './Context'
export const Comsumer = () => {
    const {name,sir}=useContext(MyContext)

  return (
    <div>
        
        Comsumer

        <h1>{name}{sir}</h1>
    </div>
  )
}
