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

  switchNameHandler(){
    this.setState({
      ...this.state,
        person:[
          { name: 'Xine', age:80 },
          { name: 'University', age: 90 },
          { name: 'Education', age: 60 }
        ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am React JS</h1>
        <p>This is really working</p>
        <button onClick={ this.switchNameHandler.bind(this)}>Swithc Button</button>
        <Person name={ this.state.person[0].name } age={ this.state.person[0].age } />
        <Person name={ this.state.person[1].name } age={ this.state.person[1].age } >
          My hobbies: Racing
        </Person>
        <Person name={ this.state.person[2].name } age={ this.state.person[2].age } />
      </div>
    );
  }
}

export default App;
