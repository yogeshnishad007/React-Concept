import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const[count,setCount]=useState(0);
    const[todo,setTodo]=useState([]);

    const Counter=()=>{
         setCount(count + 1)
    }

     const handleAdd=useCallback(()=>{
        setTodo((todo)=>[...todo,`new data`])

     },[todo])
  return (

    <div>
        
        <Child add={handleAdd} todos={todo}/>

          <h1>Count: {count}</h1>
         <button onClick={Counter}>Count</button>

    </div>
  )
}

export default Parent