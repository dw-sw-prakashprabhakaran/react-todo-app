import React from 'react';

class TodoList extends React.Component{

    render(){
        return(
            <ul className="uli">
            {this.state.value.map(state=>
            <li className="list" key={state.date}>

    {
        state.done ? <span style={{ color: 'red', textDecoration: 'line-through' }}>
            {state.input}
            </span> : <span>{state.input}</span>
    } 
                <button className="done" onClick={()=>this.doneTask(state.date)}  > &#10004;</button>
                
                <button className="del" onClick={()=>this.deleteKey(state.date)}> &#10006;</button>
            </li>)}
        </ul>
        )
    }
}

export default TodoList;