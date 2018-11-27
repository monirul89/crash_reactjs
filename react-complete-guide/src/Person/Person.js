import React from 'react';

const Person = (props)=>{
    console.log(props);
    return(
        <div>
            <p>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <p>{props.title}</p>
        </div>
        
    )
}

export default Person;