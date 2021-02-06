import React from 'react';
import './calc.css';

class CalcTheme extends React.Component {
    constructor() {
        super();
        this.state={
            numarr: [],
            full_expr: ''
        };
    }

    makeExpr(char) {
        var arr = this.state.numarr;
        arr.push(char);
        this.setState({numarr: arr});
        
        var expr='';
        for (let i in arr) {
            expr += arr[i];
        }
        this.setState({full_expr: expr});
        console.log(expr);
        console.log(this.state.full_expr);
    }

    evalExpr() {
        /*var checkResult = this.state.full_expr;
        try {
            this.setState({
                full_expr: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                full_expr: "error"
            })

        }*/
    }
    render() {
        return(
            <>
                <div className="calc">
                    <header id="screen">{this.state.full_expr}</header>
                    <table className="calctable">                
                        <tbody>
                            <tr className="orange">
                                <td>AC</td>
                                <td>%</td>
                                <td>/</td>
                            </tr>
                            <tr>
                                <td onClick={this.makeExpr.bind(this, '+')}>+</td>
                                <td>-</td>
                                <td>x</td>
                            </tr>
                            <tr>
                                <td onClick={this.makeExpr.bind(this, 7)}>7</td>
                                <td onClick={this.makeExpr.bind(this, 8)}>8</td>
                                <td onClick={this.makeExpr.bind(this, 9)}>9</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>.</td>
                                <td>0</td>
                                <td onClick={this.evalExpr(this)}>=</td>
                            </tr>	
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default CalcTheme;