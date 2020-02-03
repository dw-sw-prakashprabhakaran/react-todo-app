import React from 'react';


class TodoList extends React.Component{

    render(){
       
        return(
            <ul className="uli">
            {this.props.list}
        </ul>
        )
    }
}

export default TodoList;