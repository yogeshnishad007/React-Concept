
import React from "react";
import MyContext from "./Context";


const Provider =({children})=>{
    

      return(

          <>
           <MyContext.Provider value={{name:"yogesh",sir:"nishad"}}>

             {children}
           </MyContext.Provider>
            
           
          </>
      )
}

export default Provider