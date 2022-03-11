import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';




export const Landing = () =>{
  return (
    <>
      <section className="landing-Page">
      <Navbar />
        <div className="overlay">
          <h1>Fashion world</h1>
          <p className="subtitle">ZAKA final reductions<br />get up to 50% off!</p><br />
          <Link className="button" to={"/login"}>Shop Now</Link>
          
          </div>

        </section>
      </>
  );
};