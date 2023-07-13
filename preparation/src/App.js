import "./App.css";
import { Component } from "react";
// import ClassCounter from "./Components/ClassCounter";
import FunCounter from "./Components/FunCounter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount : Inital render");
  }

  

    increment(){

        this.setState({count:this.state.count + 1})
    }

    componentWillUnmount(){
       
      console.log("componentWillUnmount : Class Component Removed")
    }

  render() {
    return (
      <>
        {/* <h1>{this.state.count}</h1> */}

         {/* <ClassCounter num={this.state.count}></ClassCounter> */}
         <FunCounter num={this.state.count} />
          
        <button onClick={()=>this.increment()}>Click</button>

        {/* <button onClick={this.increment.bind(this)}>Click</button> */}

      </>
    );
  }
}

export default App;
