import React,{useMemo,useState} from 'react'

 function Memo() {
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)


       const isEven=useMemo(()=>{
          console.warn("Run Memo")
              let i=0;
              while(i<200000000) i++;
             return count%2===0;
       },[count])
  return (
    <div>
           <h1>{isEven?"EvenNumber":"OddNumber"}</h1>
         <button onClick={()=>{setCount(count + 1)}}>Count - {count}</button>
         <button  onClick={()=>{setCount1(count1 + 1)}}>Count1 - {count1}</button>
    </div>
  )
}
export default Memo;