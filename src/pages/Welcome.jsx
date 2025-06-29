
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Welcome.css'; 

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Movietty</h1>
    </div>
  );
};

export default Welcome;
