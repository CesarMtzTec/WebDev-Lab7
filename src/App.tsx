import React from 'react';
import './App.css';
import ProductList from './containers/ProductList';
import NavBar from './components/NavBar';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <ProductList />
    </React.Fragment>
  );
}

export default App;
