
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialShareImage from '@/components/SocialShareImage';

const SocialShareImageRoute: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // This is just to prevent the route from being a dead end
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div style={{ padding: '20px' }}>
      <SocialShareImage />
      <p>Generating social share image...</p>
      <p>You will be redirected to the home page in 5 seconds.</p>
    </div>
  );
};

export default SocialShareImageRoute;
