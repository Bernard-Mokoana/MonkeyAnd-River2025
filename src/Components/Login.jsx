import React, { useState } from 'react';

const Login = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
    alert("Login submitted. Check console for data.");
  };

  return (
    <form onSubmit={handleLogin} className="form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      <p><a href="#">Forgot Password?</a></p>
      <p>Not a member? <span onClick={onSwitch} className="link">Sign up</span></p>
    </form>
  );
};

export default Login;
