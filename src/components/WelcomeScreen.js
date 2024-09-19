import React, { useState, useEffect } from 'react';
import './WelcomeScreen.css';
import EmailScreen from './EmailScreen';

const WelcomeScreen = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [showH1, setShowH1] = useState(false);
  const [showP, setShowP] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [title, setTitle] = useState('Welcome to our form');
  const [description, setDescription] = useState('This is the description ');

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => setShowH1(true), 300);
    const timer2 = setTimeout(() => setShowP(true), 600);
    const timer3 = setTimeout(() => setShowButton(true), 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="dashboard">
      {currentScreen === 'welcome' && (
        <>
          <h2>Dashboard › Welcome</h2>
          <div className="tabs">
            <button className="tab active" aria-label="Content Tab">Content</button>
            <button className="tab" aria-label="Design Tab">Design</button>
            <button className="tab" aria-label="Share Tab">Share</button>
            <button className="tab" aria-label="Replies Tab">Replies</button>
          </div>

          <div className="steps">
            <h3>Steps</h3>
            <p>The steps users will take to complete the form</p>
            <button className="welcome-btn" aria-label="Welcome">Welcome Screen</button>
            <button
              className="email-btn"
              aria-label="Email"
              onClick={() => handleScreenChange('email')}
            >
              Email Screen
            </button>
            <button className="add-field" aria-label="Add new field">+ Add field</button>
          </div>

          <button className="end-btn" aria-label="step end">End screen</button>
          <div className="buttons">
            <button className="save-btn" aria-label="Save and Publish">Save & Publish</button>
            <button className="delete-btn" aria-label="Delete">Delete</button>
          </div>

          <div className='container'>
            {showH1 && (
              <h1 style={{ transition: 'transform 0.5s', transform: showH1 ? 'translateY(0)' : 'translateY(20px)' }}>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  style={{ background: 'transparent', border: 'none', color: '#ccc', fontSize: '60px' }} 
                />
              </h1>
            )}
            {showP && (
              <p style={{ transition: 'transform 0.5s', transform: showP ? 'translateY(0)' : 'translateY(20px)' }}>
                <input 
                  type="text" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  style={{ background: 'transparent', border: 'none', color: '#ccc', fontSize: '35px' }} 
                />
              </p>
            )}
            {showButton && (
              <button className="startbtn" aria-label="Start">Start</button>
            )}
          </div>
        </>
      )}

      {currentScreen === 'email' && <EmailScreen />}
    </div>
  );
};

export default WelcomeScreen;
