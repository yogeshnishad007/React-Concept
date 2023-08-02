
import React, { useState } from "react";
import MyContext from "./Context";


const Provider =({children})=>{
    
    const [toggle,setToggle]=useState(false);

    const handler=()=>{

           setToggle(!toggle)
    }

      return(

          <>
           <MyContext.Provider value={{toggle,handler}}>

             {children}
           </MyContext.Provider>
            
           
          </>
      )
}

export default Provider