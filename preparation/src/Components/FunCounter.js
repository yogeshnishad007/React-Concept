
import React, { useEffect } from 'react'

 const FunCounter = ({num}) => {
    useEffect(()=>{

          console.log("Fun Component: Updateing")

          return ()=>{

            console.log("Function Components : Unmount")
          }

    },[num])
    
  return (
    <div>
          <h1>{num}</h1>
    </div>
  )
}
export default FunCounter;
