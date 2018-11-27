import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person:[
      { name: 'Max', age:28 },
      { name: 'Menu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am React JS</h1>
        <p>This is really working</p>
        <Person name={ this.state.person[0].name } age={ this.state.person[0].age } title="I am Person and 25 years old" />
        <Person name={ this.state.person[1].name } age={ this.state.person[1].age } title="I am Person and 25 years old" >
          My hobbies: Racing
        </Person>
        <Person name={ this.state.person[2].name } age={ this.state.person[2].age } title="I am Person and 25 years old" />
      </div>
    );
  }
}

export default App;
