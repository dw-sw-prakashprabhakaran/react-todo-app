import React from 'react';
import './style.css';

import Form from './components/Form';
import TodoList from './TodoList';
import TodoItem from './components/TodoItem';
import Strike from './components/Strike';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            input:"",
            value:[],
        };
        this.addItem = this.addItem.bind(this);
    }

    updateInput = (e) =>{
        this.setState({
            input:e.target.value,
        }) 
    }

    addItem(e){
        e.preventDefault();
        this.setState(prev=>{
            let preState = {
                input:prev.input,
                date:Date.now(),
                done:false,
            }
            return{
                input:"",
                value:prev.value.concat(preState),             
            }         
        })

    }

    deleteKey = (key)=>{
        let filterItem = this.state.value.filter((item)=>(item.date !== key))

        this.setState({
                value:filterItem,
            })
    }

    doneTask(date){
        let result = this.state.value.map((val) => {
            if (val.date === date) {
                val.done = !val.done
            }
            return val;
        })
        this.setState({ 
            value: result 
        })
    }
    
    render(){
        let mapList = this.state.value.map((value)=>{
       return <TodoItem 
      strike={<Strike class="done" doneTask={()=>this.doneTask(value.date)} symbol="&#10004;" />}
      delete={<Strike class="del" doneTask={()=>this.deleteKey(value.date)} symbol="&#10006;" />}
       date={value.date} 
       input={value.input}
        done={value.done}/>
        })
        return(
            <div className="flex">
                <div className="inside">
                    <Form update={this.updateInput} input={this.state.input} add={this.addItem} />
                    <TodoList list={mapList} />
                </div>
            </div>
         

        )
    }
}

export default App;