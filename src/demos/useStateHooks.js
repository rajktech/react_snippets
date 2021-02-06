import React, {useState} from 'react';

class useStateHooksComp extends React.Component {
    render() {
        return (
            <>
                <App1 />
                <App2 />
            </>
        );
    }
}
class App1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    incNum() {
      this.setState({count: this.state.count+1});
    }

    decNum() {
      this.setState({count: this.state.count - 1});
    }
    render() {      
      return(
        <>
          <h1>From State and class component</h1>
          <div>count {this.state.count}</div>
          <button onClick={this.incNum.bind(this)}>Increment</button>
          <button onClick={this.decNum.bind(this)}>Decrement</button>
        </>
      );
    }
}

const App2 = () => {
  const [count, setCount] = useState(0);
  const incNum = () => {
    setCount(count+1);
  }

  const decNum = () => {
    setCount(count-1);
  }
  return(
    <>
      <h1>From Hooks and functional component</h1>
      <div>Count {count}</div>
      <button onClick={incNum}>Increment</button>
      <button onClick={decNum}>Decrement</button>
    </>
  );
}

export default useStateHooksComp;
