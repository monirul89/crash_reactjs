import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am React JS</h1>
        <p>This is really working</p>
        <Person name="First Person" age="25" title="I am Person and 25 years old" />
        <Person name="2nd Person" age="28" title="I am Person and 28 years old" >
          My hobbies: Racing
        </Person>
        <Person name="3rd Person" age="26" title="I am Person and 26 years old" />
      </div>
    );
  }
}

export default App;
