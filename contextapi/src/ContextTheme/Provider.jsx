
import React, { useState } from "react";
import MyContext from "./Context";


const Provider =({children})=>{
    
    const [count,setCount]=useState(0);

    const handler=()=>{

           setCount(count+1)
    }

      return(

          <>
           <MyContext.Provider value={{count,handler}}>

             {children}
           </MyContext.Provider>
            
           
          </>
      )
}

export default Provider