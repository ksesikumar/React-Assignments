import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductPage from './DisplayingProduct/ProductPage';
import Dashboard from './DataFilteringComponent/Dashboard';
import LoginPage from './DataFilteringUsingCRUD/LoginPage';
import DashboardPage from './DataFilteringUsingCRUD/DashboardPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {/*
      <ProductPage></ProductPage>
      <Dashboard></Dashboard>
      */}

      {isLoggedIn ? (
        <DashboardPage></DashboardPage>
      ) : (
        <LoginPage onLogin={setIsLoggedIn}></LoginPage>
      )}
      
    </div>
  );
}

export default App;
