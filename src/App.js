import React from 'react';
import Header from './components/common/Header';
import './styles/global/App.scss';
import HomePage from './components/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
