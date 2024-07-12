import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductPage from './DisplayingProduct/ProductPage';
import Dashboard from './DataFilteringComponent/Dashboard';
import LoginPage from './DataFilteringUsingCRUD/LoginPage';
import DashboardPage from './DataFilteringUsingCRUD/DashboardPage';
import Counter from './CounterApp/Counter';
import ParentComponent from './ChildToParent/ParentComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {/*
      <ProductPage></ProductPage>
      <Dashboard></Dashboard>
      {isLoggedIn ? (
        <DashboardPage></DashboardPage>
      ) : (
        <LoginPage onLogin={setIsLoggedIn}></LoginPage>
      )}
      <Counter></Counter>
      */}
      <ParentComponent></ParentComponent>
      

      
      
    </div>
  );
}

export default App;
