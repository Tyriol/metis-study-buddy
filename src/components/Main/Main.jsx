import React from 'react';
import './Main.css';

const Main = () => {
    return (
      <main className="main">
        <div className="main-content">
          <h1>Welcome to METIS</h1>
          <p>Please sign in or sign up to continue</p>
          <div className="button-group">
            <button className="btn sign-in">Sign In</button>
            <button className="btn sign-up">Sign Up</button>
          </div>
        </div>
      </main>
    );
  };

export default Main;