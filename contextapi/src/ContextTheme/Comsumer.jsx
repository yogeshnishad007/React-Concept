

import React, { useContext } from 'react'
import MyContext from './Context'

import "./Style.css"
export const Comsumer = () => {
    const {toggle,handler}=useContext(MyContext)

  return (
    <div className={toggle?"dark":"light"} >
        
      

        <h1>  Comsumer Heading</h1>

           <h2>{toggle?"DARK":"LIGHT"}</h2>

           <button onClick={handler}>{toggle?"LIGHT":"DARK"}</button>

           <h2>Footer Part</h2>
    </div>
  )
}
