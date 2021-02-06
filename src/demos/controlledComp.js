import {useState} from 'react';
import React from 'react';

const ControlledCompFunctional = () => {
    const [name, setName] = useState();
    const [fullname, SetFullName] = useState();
    
    const changeHandler = (event) => {
        setName(event.target.value);
    }

    const clickHandler = () => {
        SetFullName(name);
    }
    return(
        <div>
            <h2>Controlled Component in functional format</h2>
            <h3>(onchange) Hello, {name}</h3>
            <h3>(onclick) Hello, {fullname}</h3>
            <input type="text" name="myname" onChange={changeHandler} />&nbsp;
            <button type="button" onClick={clickHandler}>Click</button>
            <hr />
        </div>
    );
}


class UncontrolledClass extends React.Component {
    constructor() {
        super();
        this.input1 = React.createRef();
    }

    clickHandler = () => {
        alert('Input Value is: ' + this.input1.current.value);
    }

    render() {
        return(
            <div>           
                <h2>UnControlled Component in class format</h2>     
                <input type="text" name="mytext" ref={this.input1} />&nbsp;
                <input type="button" value="Click" onClick={this.clickHandler}/>
                <hr />
            </div>
        );
    }
}

const UncontrolledFunctional = () => {
    let input1 = React.createRef();

    const clickHandler = () => {
        alert('Input Value is: ' + input1.current.value);
    }
   
    return(
        <div>         
            <h2>UnControlled Component in functional format</h2>       
            <input type="text" name="mytext" ref={input1} />&nbsp;
            <input type="button" value="Click" onClick={clickHandler} />
            <hr />
        </div>
    );    
}


const ControlledVSUncontrolled = () => {
    return(
        <>
            <ControlledCompFunctional />
            <UncontrolledClass />
            <UncontrolledFunctional />
        </>
    );
}

export default ControlledVSUncontrolled;