import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <div className='w-full h-[100vh] flex flex-row p-8 bg-[#fafafa]'>
      <div className='w-[40%] h-[calc(100vh-32px)] flex flex-col justify-center items-center'>
      <h1 className='mb-4 text-[24px]'>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-start gap-4 w-[350px]'>
      <div>
        <label>
          <input className='border-[#e8e8e8] border-b-[1px] rounded p-1 h-[40px] w-[350px] text-sm pl-3' type="text" placeholder='Login' value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        <label>
          <input className='border-[#e8e8e8] border-b-[1px] rounded p-1 h-[40px] w-[350px] text-sm pl-3' type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <button className='w-full h-[45px] bg-black text-white rounded hover:scale-105 transition delay-150 duration-300 ease-in-out' type="submit">Sign in</button>
      </form>
      <button className='mt-8 text-sm text-[#7f7f88]' onClick={handleClick}>No account? <span className='underline'>Click here.</span></button>
    </div>
      <div className='w-[60%] h-[calc(100vh-64px)] bg-slate-500 rounded-tl-[60px] rounded-br-[60px]'>
      </div>
    </div>
  );
}

export default Login;
