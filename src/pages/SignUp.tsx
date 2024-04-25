import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    
    return (
        <div className='p-3 max-w-lg mx-auto bg-cover'>
            <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
            <form className='flex flex-col gap-4'>
                <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className='bg-slate-100 p-3 rounded-lg' />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='bg-slate-100 p-3 rounded-lg' />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='bg-slate-100 p-3 rounded-lg' />
                <button type='submit' className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
            </form>
            <div className='flex gap-2 mt-5'>
                <p>Have an account?</p>
                <Link to='/sign-in'>
                    <span className='text-blue-500'>Sign in</span>
                </Link>
            </div>
        </div>
    );
}

