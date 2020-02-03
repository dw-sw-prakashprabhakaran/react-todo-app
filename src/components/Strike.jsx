import React from 'react';

function Strike(props) {



    return(
        <button className={props.class} onClick={props.doneTask} > {props.symbol} </button>
    )
    
}

export default Strike;