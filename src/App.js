import React from "react"
import './App.css';
import Counter from "./components/Counter";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0
    }
  }
  
  increment = () => { 
    if (this.state.count === this.state.count2 & this.state.count < 20){
    this.setState({ count: this.state.count + 1, count2: this.state.count2 +1 }) }
    }
  substract = () => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1,count2: this.state.count2 - 1 })
    }
  }

  

 


  // () => {
  //   if ()
  //   this.setState({count: this.state.count - 1})
  // }

  render() {
    return (
      <>
        <Counter count={this.state.count} substract={this.substract} increment={this.increment} />

        <Counter count={this.state.count} substract={this.substract} increment={this.increment} />
      </>
    );
  }

}


export default App;
