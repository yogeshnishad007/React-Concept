import React, { useMemo, useState } from 'react'

const Usememo = () => {
const [plus,setPlus]=useState(0)
const [minus,setMinus]=useState(100)

const multiplication= useMemo(()=>{
    console.log("Run Memo")
         return plus * 10
},[plus])


  return (
    <div>

        <h1>UesMemo</h1>

          <br/>

             <h1>{multiplication}</h1>

         <br/>

        <h2>{plus}</h2>
          <br/>
        <button onClick={()=> setPlus(plus+1)}>Plus</button>
         <br/>

         <h2>{minus}</h2>

         <br/>
         <button onClick={()=> setMinus(minus-1)}>minus</button>

    </div>
  )
}

export default Usememo



/*
          function add(a,b){
            return a+b
          }

          add(5,5)

*/