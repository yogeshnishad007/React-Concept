

import { Component } from "react";

class ClassCounter extends Component{

    componentDidUpdate(prevprops,prevState){
         
        if(prevprops.num !== this.props.num){

            console.log("Component Updated")
        }
    }

      render(){

           return(
               <>
                    <h1>{this.props.num}</h1>
               </>
           )
      }
}
export default ClassCounter;