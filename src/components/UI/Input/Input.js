import React from 'react';
import styles from './Input.module.scss';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                {...props.elementConfig}
                style={{
                        border: props.invalid && props.touched ? '1px solid red' : '1px solid green' ,           
                        backgroundColor: props.invalid && props.touched ? 'pink' : 'white'            
                    }} 
                value={props.value}
                onChange={props.changed}/>
            break;
        case ('textarea'):
            inputElement = <textarea 
                {...props.elementConfig}
                style={{
                    border: props.invalid && props.touched ? '1px solid red' : '1px solid green' ,           
                    backgroundColor: props.invalid && props.touched ? 'pink' : 'white'            
                }} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        default:
            inputElement = <input 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>

    } 

    return (
    <div className={styles.Input}>
        {inputElement}
    </div>
    );
};

export default input;

