import React, { useState } from 'react'
import { auth, db } from '../Config/firebase'
import { Link } from 'react-router-dom'

export const Signup = (props) => {

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // signup
    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }

    return (
        <div className='box-container'>
           
           <form autoComplete="off"onSubmit={signup}>
                    <div className='form-inner'>
                    <h2>Sign up</h2>
                    {error && <span className='error-msg'>{error}</span>}
                       <div className='form-group'>
                       
                        <label htmlFor="name">Name</label>
                        <input type="text" className='form-control' required
                        onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" className='form-control' required
                            onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="passowrd">Password</label>
                        <input type="password" className='form-control' required
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button><br />
                        <span>Already have an account? Login
                        <Link to="login"> Here</Link>
                        </span>
                        </div>
               </form>
        
        </div>
    )
}