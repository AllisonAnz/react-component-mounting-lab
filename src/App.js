import React, { Component } from 'react';

import Timer from './Timer'

class App extends Component {
  //the multiTimer allows users to start multiple one-second timers
  //no props being used here, so we can use the shorthand declaration of state
  state = {
    timerIDs: []
  }


  //Your code here:
  //calls componentDidMount and adds a Timer
  //App is top level so CDM will be invoked before any other child component even constructed
  //CDM is reserved for taking initial action within an app
  //this includes getting remote API data, setting cursor focus, or creating an interval/timeout
  
    //App comp. is keeping track of timers using an array of random ID numbs.
    //this allows for easy removal or addition of Timer components
    //CDM invokes the existing handleAddTimer class method (this.handleAddTimer())
  componentDidMount() {
    this.handleAddTimer()
  }



  // No need to modify anything in render or the class methods below
  // Unless, of course, you're curious about how it all works
  render() {

    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>

      </div>
    );
  }

  // returns array of components written in JSX, mapped from this.state.timerIDs
  renderTimers = () => this.state.timerIDs.map(id => {
    return <Timer key={id} id={id} removeTimer={this.removeTimer} />
  })

  // adds a random number for timer ID
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random()*1000)]
    }))
  }

  // removeTimer updates state, removing any timer that matches the provided author
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }))
  }


}

export default App;
