import React from 'react';

const Person = (props)=>{
    return(
        <div>
            <p>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input onChange={} type="text" />
        </div>
        
    )
}

export default Person;