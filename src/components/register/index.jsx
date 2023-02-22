import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={handleClick}>Click!</button>
    </div>
  );
}

export default Register;
