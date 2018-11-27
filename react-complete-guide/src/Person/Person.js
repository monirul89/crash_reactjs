import React from 'react';
import './Person.css';

const Person = (props)=>{
    return(
        <div className="Person">
            <p>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input onChange={props.changed } type="text" placeholder={props.name} />
        </div>
        
    )
}

export default Person;