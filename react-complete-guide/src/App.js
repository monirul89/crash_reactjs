import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person:[
      { name: 'Max', age:28 },
      { name: 'Menu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState:'some thing hobies'
  }

  switchNameHandler=(newName)=>{
    this.setState({
      ...this.state,
        person:[
          { name: newName, age:80 },
          { name: 'University', age: 90 },
          { name: 'Education', age: 60 }
        ]
    })
  }
  nameChangeHandler=(event)=>{
    this.setState({
      ...this.state,
        person:[
          { name: 'Max', age:30 },
          { name: event.target.value, age: 28 },
          { name: 'Education', age: 26 }
        ]
    })
  }
  
  render() {
    const style = {
      backgroundColor:'while',
      font: 'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      marginBottom: '10px'
    }
    return (
      <div className="App">
        <h1>Hi, I am React JS</h1>
        <p>This is really working</p>
        <button 
        onClick={()=> this.switchNameHandler('Maxiwell')}
        style={style}
        >Swithc Button</button>
        <Person 
        name={ this.state.person[0].name } 
        age={ this.state.person[0].age }
         />

        <Person 
        name={ this.state.person[1].name } 
        age={ this.state.person[1].age }
        click={this.switchNameHandler.bind(this, 'Max!!')}
        changed={this.nameChangeHandler}
        >My hobbies: Racing
        </Person>

        <Person 
        name={ this.state.person[2].name } 
        age={ this.state.person[2].age } />
      </div>
    );
  }
}

export default App;
