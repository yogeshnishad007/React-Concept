import React,{memo} from 'react'

const Child = ({add,todos}) => {
    console.log("Child Renderd")
    
  return (
    <div>
           
           { todos.map((el,index)=>{
            return(

                   <>
                          <p key={index}>{el +" "+ index}</p>
                   </>
            )

           })

           }

           <button onClick={add}>Add Task</button>
    </div>
  )
}

export default memo(Child);