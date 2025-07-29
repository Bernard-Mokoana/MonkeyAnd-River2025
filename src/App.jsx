import React, { useState } from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';
import asset1 from './assets/asset1.png';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="left-panel">
        <img src={asset1} alt="Travel" />
      </div>
      <div className="right-panel">
        {isLogin ? (
          <Login onSwitch={() => setIsLogin(false)} />
        ) : (
          <Signup onSwitch={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
};

export default App;
