import "./App.css";
import { Component } from "react";

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

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>

        <button onClick={()=>this.increment()}>Click</button>

        {/* <button onClick={this.increment.bind(this)}>Click</button> */}

      </>
    );
  }
}

export default App;
