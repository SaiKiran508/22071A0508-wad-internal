import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={formData.email} onChange={(event) => setFormData({...formData, email: event.target.value })} />
        <br />
        <label>Password:</label>
        <input type="password" value={formData.password} onChange={(event) => setFormData({...formData, password: event.target.value })} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;