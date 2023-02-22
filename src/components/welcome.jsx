import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate(`/login`);
  };

  const handleClickRegister = () => {
    navigate(`/register`);
  };

  return (
    <div>
      <h1 className='text-red-700'>Welcome to the app!</h1>
      <button onClick={handleClickLogin}>Login</button>
      <button onClick={handleClickRegister}>Register</button>
    </div>
  );
};

export default Welcome;
