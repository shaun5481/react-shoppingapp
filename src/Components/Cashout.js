import React, { useState, useEffect, useContext } from 'react'
import { auth, db } from '../Config/firebase'
import { CartContext } from '../Global/CartContext'
import { Navbar } from './Navbar';
import { useHistory } from 'react-router-dom'

export const Cashout = (props) => {

    const history = useHistory();

    const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).onSnapshot(snapshot => {
                    setName(snapshot.data().Name);
                    setEmail(snapshot.data().Email);
                })
            }
            else {
                history.push('/login')
            }
        })
    })

    const cashoutSubmit = (e) => {
        e.preventDefault();
        auth.onAuthStateChanged(user => {
            if (user) {
                const date = new Date();
                const time = date.getTime();
                db.collection('Buyer-info ' + user.uid).doc('_' + time).set({
                    BuyerName: name,
                    BuyerEmail: email,
                    BuyerCell: cell,
                    BuyerAddress: address,
                    BuyerPayment: totalPrice,
                    BuyerQuantity: totalQty
                }).then(() => {
                    setCell('');
                    setAddress('');
                    dispatch({ type: 'EMPTY' })
                    setSuccessMsg('Your order has been placed successfully. Thank you for shopping with us!.');
                    setTimeout(() => {
                        history.push('/home')
                    }, 5000)
                }).catch(err => setError(err.message))
            }
        })
    }

    return (
        <>
            <Navbar user={props.user} />
            <div className='cashout-container'>
                <form autoComplete="off" className='form-outer' onSubmit={cashoutSubmit}>
                <div className='form-inner'>
                <h2>Cashout Details</h2>
                {successMsg && <div className='success-msg'>{successMsg}</div>}
                {error && <span className='error-msg'>{error}</span>}
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' required
                        value={name} disabled />
                        </div>
                    <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' required
                        value={email} disabled />
                        </div>
                    <div className='form-group'>
                    <label htmlFor="Cell No">Cell No</label>
                    <input type="number" className='form-control' required
                        onChange={(e) => setCell(e.target.value)} value={cell} placeholder='eg 03123456789' />
                        </div>
                    <div className='form-group'>
                    <label htmlFor="Delivery Address">Delivery Address</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setAddress(e.target.value)} value={address} />
                        </div>
                    <div className='form-grouping'>
                    <label htmlFor="Price To Pay">Price To Pay</label>
                    <input type="number" className='form-control' required
                        value={totalPrice} disabled />
                        </div>
                    <div className='form-group'>
                    <label htmlFor="Total No of Products">Total No of Products</label>
                    <input type="number" className='form-control' required
                        value={totalQty} disabled />
                        </div>
                    <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button>
                    </div>
                </form>
                
            </div>
        </>
    )
}