import React, {Component} from 'react';
import Input from './Input';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    numLegs() {
        const nonEmptyLegs = this.props.legs.filter(leg => {
            return leg !== ''
        })

        return nonEmptyLegs.length
    }

    render() {
        let factor1 = {prop: this.numLegs(), fn: (val) => val % 2 === 1};
        let factor2 = {prop: this.props.orderType, fn: (val) => val === 'market'};
        let factors = [factor1, factor2]

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div style={{padding: '50px'}}>
                    <Input label="Order Type"
                           onChange={this.props.setOrderType} {...this.props}/> {/* Market, Limit, Stop Limit, Market On Close, Limit on Close*/}
                    <Input label="Limit Price" {...this.props}
                           disablingFactors={factors}
                    />
                    <Input label="Leg 1 Contracts"
                           onChange={this.props.addLeg} {...this.props}/>
                </div>

                <p>Num legs: {this.numLegs()}</p>
            </div>
        );
    }
}

export default App;