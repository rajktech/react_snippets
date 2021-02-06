import React, {Component} from 'react';
class ParentComp extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Raj'
        }
    }
    render() {
        const changeName = (name) => {
            this.setState({name: name});
        }
        return(
            <div>
                <h1>My name is {this.state.name}</h1><br/>
                This is parent component<br/>                
                
                <button onClick={changeName.bind(this, 'Shakaal')}>Change Name from parent</button><br/><br/>
                <ChildComp changeNamefunc={changeName} />
            </div>
        );
    }
}

class ChildComp extends React.Component {
    render() {
        return(
            <div>
                This is child component<br/>
                <button onClick={this.props.changeNamefunc.bind(this, 'Qatya')}>Change name from child</button>

                <div><br/><br/><br/>
                Notes:<br/>
                1. Create a callback function in the parent component. This callback function will get the data from the child component.<br />
                2. Pass the callback function in the parent as a prop to the child component.<br />
                3. The child component calls the parent callback function using props.
                </div>
            </div>
        );
    }
}

export default ParentComp;