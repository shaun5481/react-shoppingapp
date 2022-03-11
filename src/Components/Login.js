import React, { useState } from 'react'
import { auth } from '../Config/firebase'
import { Link } from 'react-router-dom'
import '../CSS/form.css'

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/home');
        }).catch(err => setError(err.message));
    }

    return (
        <div className='box-container'>
           
            <form autoComplete="off" onSubmit={login}>
                    <div className='form-inner'>
                    <h2>Log In</h2>
                    {error && <span className='error-msg'>{error}</span>}
                       <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" className='form-control' required
                            onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" className='form-control' required
                            onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
                        <br />
                        <span>Don't have an account? Register
                        <Link to="signup"> Here</Link>
                        </span>
                        </div>
               </form>
        
        </div>
    )
}