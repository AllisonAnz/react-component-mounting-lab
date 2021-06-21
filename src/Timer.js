import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  };

  // add your code here
  //ComponentDidMount is good place to include setinterval or setTImeout function
  //this allows you to delay something from happening on a component or cause some repeating change
  //To create a setInterval assign it to a variable withing the scope of our class 
  //Write a CDM that initalizes the interval, pass clockTick as the callback function 
  //and set it to 1000 to update every second
  componentDidMount(){
    this.interval = setInterval(this.clockTick, 1000)
    //When a new timer is added, we should see the displayed number increase every second
  }

  //We need to clear an interval, use build in clearInterval passing in the local var.
  //Write a componentWillUnmount method that cleans up the interval you've created 
  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  //clock functions
  //this method handles updating the state value (time) and is then included in the render
  //we need to set up an interval to call clockTick
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
  };

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };
}

export default Timer;
