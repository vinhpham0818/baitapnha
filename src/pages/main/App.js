import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import HeaderComp from '../../components/header-component/header-component';
import HomePage from '../home/home';
import ProductsPage from '../products/products';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <header className="main-header">
          <HeaderComp></HeaderComp>
        </header>
      </div>
    </div>
  );
}

export default App;
