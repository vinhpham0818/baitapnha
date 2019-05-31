import React from 'react'
import {Switch,Route} from 'react-router-dom'
import HomePage from './pages/home/home'
import ProductsPage from './pages/products/products';

const MainRouter = () => (
    <mai>
        <Switch>
            <Route path='/' component={HomePage}></Route>
            <Route path="/Products" component={ProductsPage}></Route>
        </Switch>
    </mai>
)

export default MainRouter