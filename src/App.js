import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavigationRoutes from './navigation';
import { WebContainer } from './screens/WebContainer';

function App() {

  return (
    <NavigationRoutes/>
  );
}

export default App;
