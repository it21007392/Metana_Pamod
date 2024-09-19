import React, { useState } from 'react';
import './EmailScreen.css';
import WelcomeScreen from './WelcomeScreen';

const EmailScreen = () => {
  const [title, setTitle] = useState('Email Address');
  const [description, setDescription] = useState('Type your email address here');
  const [isRequired, setIsRequired] = useState(false);
  const [navigated, setNavigated] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleToggleRequired = () => {
    setIsRequired(prev => !prev);
  };

  const handleSave = () => {
    if (isRequired) {
      const isValid = description.trim() && description.includes('@') && description.includes('.');
      if (!isValid) {
        alert('Invalid format. Please ensure the description includes "@" and ".".');
        return;
      }
    }
    setNavigated(true);
  };

  if (navigated) {
    return <WelcomeScreen />;
  }

  return (
    <div>
      <h2>Settings</h2>

      <div>
        <h3>Title</h3>
        <input type="text" className="input-title" value={title} onChange={handleTitleChange} />
      </div>

      <div>
        <h3>Description</h3>
        <input type="text" className="input-description" value={description} onChange={handleDescriptionChange} />
      </div>

      <div className="toggle-required">
        <h4>
          Required 
          <label className="switch">
            <input type="checkbox" checked={isRequired} onChange={handleToggleRequired} />
            <span className="slider"></span>
          </label>
        </h4>
      </div>

      <div className="buttons">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="discard-btn">Discard</button>
      </div>

      <div className="main-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EmailScreen;
