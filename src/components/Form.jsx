import React from 'react';
import TodoList from '../TodoList';

class Form extends React.Component{
    render(){
        return(
            <div className="input-container">
                <form onSubmit={this.props.add}>
                    <input 
                required className="input" type="text" 
                value={this.props.input} 
                onChange={this.props.update}/>
                   <button className="add" type="submit" >click</button>
                </form> 
                <TodoList />        
             </div>
           
        )
    }
}

export default Form;