import React from 'react';

function TodoItem(props) {
 
        return(
           
          
            <li className="list" key={props.date}>
    {  props.done ?
     <span style={{ color: 'red', textDecoration: 'line-through' }}>
            {props.input}
            </span> : <span>{props.input}</span>} 
              {props.strike}     
              {props.delete}
            </li>
       
        )
    
}

export default TodoItem;