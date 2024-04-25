import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignIn</h1>
      <form className='flex flex-col gap-4' >
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-slate-700 text-white p-3 rounde-lg uppercase hover:opacity-95 disabled:opacity-80' type='submit'>
          Sign In
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
    </div>
  );
}
