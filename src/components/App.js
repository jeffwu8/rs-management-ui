"use strict"

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Header} from './header.js';
import {Home} from './home.js';
import {ProductList} from '../components/ProductList';

import ProductStore from '../stores/productStore';

export class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            product:{
                productList: [],
                readState:{
                    pending:false,
                    success:false,
                    failure:false
                },
                createState:{
                    pending:false,
                    success:false,
                    failure:false
                },
                updateState:{
                    pending:false,
                    success:false,
                    failure:false
                },
                deleteState:{
                    pending:false,
                    success:false,
                    failure:false
                },
                error: ''
            }
        }
    }

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/products' render={(props) => (<ProductList {...props} product={this.state.product} />)}/>
                </Switch>
            </div>
        );
    }

    componentDidMount(){
        ProductStore.addChangeListener(this._onProductChange.bind(this));
    }

    componentWillUnmount(){
        ProductStore.removeChangeListener(this._onProductChange.bind(this));
    }

    componentDidUpdate() {
        this._onProductChange.bind(this);
    }

    _onProductChange(){
        this.setState({product: ProductStore.getAllProducts()});
    }
}