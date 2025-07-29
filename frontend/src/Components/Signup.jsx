import React, { useState } from 'react';

const Signup = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup with:", { name, email, password });
    alert("Signup submitted. Check console for data.");
  };

  return (
    <form onSubmit={handleSignup} className="form">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <button type="submit">Sign Up</button>
      <p>Already a member? <span onClick={onSwitch} className="link">Login</span></p>
    </form>
  );
};

export default Signup;
