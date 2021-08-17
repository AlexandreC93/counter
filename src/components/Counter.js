import React from "react"
import "../styles/global.css"



class Counter extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }

    // } 
    render() {
        return (
            <div className="body">

                <div className="container">
                    <button style={{ backgroundColor: "red" }} className="btn" onClick={this.props.substract}
                    // if (this.state.count<= 0){
                    //     this.state.count = 0
                    //  }

                    > - </button>
                    <h1> <strong>Counter</strong> </h1>

                    <button style={{ backgroundColor: "green" }} className="btn" onClick={this.props.increment}
                    > + </button>
                </div>

                <h2 style={{ textAlign: "center" }}>{this.props.count}</h2>

            </div>

        )
    }
}

export default Counter;