import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Link  } from 'react-router-dom';
import Addition from './calculator/Addition';
import Subtraction from './calculator/Subtraction';
import Multiplication from './calculator/Multiplication';
import Division from './calculator/Division';


class Calculator extends Component {
    render(){
        return (
        <BrowserRouter>
            <div>    
                <h1>Calculator App</h1>
                <p className="NavigationLinks">
                    <span><Link to={'/addition'}>Addition</Link></span>
                    <span><Link to={'/subtraction'}>Subtraction</Link></span>
                    <span><Link to={'/multiplication'}>Multiplication</Link></span>
                    <span><Link to={'/division'}>Division</Link></span>
                </p>
                <hr />
                <Switch>
                    <Route exact path='/addition' component={Addition} />
                    <Route exact path='/subtraction' component={Subtraction} />
                    <Route exact path='/multiplication' component={Multiplication} />
                    <Route exact path='/division' component={Division} />
                </Switch>
            </div>
        </BrowserRouter>    
    );}
}

export default Calculator