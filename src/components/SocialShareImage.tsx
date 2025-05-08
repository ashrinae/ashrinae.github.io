
import React, { useEffect, useRef } from 'react';

const SocialShareImage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions (1200x630 is recommended for social media sharing)
    canvas.width = 1200;
    canvas.height = 630;
    
    // Background with gradient matching the site theme
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#f1f0fb');  // Light purple tone matching site
    gradient.addColorStop(1, '#e5deff');  // Soft purple-ish white
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw bicycle wheel matching the site background
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const wheelRadius = 220;
    
    // Draw wheel rim
    ctx.beginPath();
    ctx.arc(centerX, centerY, wheelRadius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(110, 89, 165, 0.2)';
    ctx.lineWidth = 5;
    ctx.stroke();
    
    // Draw inner rim
    ctx.beginPath();
    ctx.arc(centerX, centerY, wheelRadius - 15, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(110, 89, 165, 0.15)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw hub
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(110, 89, 165, 0.2)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(110, 89, 165, 0.25)';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Draw exactly 7 spokes to match "seven spoke" name
    const spokeCount = 7;
    for (let i = 0; i < spokeCount; i++) {
      const angle = (i / spokeCount) * Math.PI * 2;
      const innerX = centerX + Math.cos(angle) * 30;
      const innerY = centerY + Math.sin(angle) * 30;
      const outerX = centerX + Math.cos(angle) * wheelRadius;
      const outerY = centerY + Math.sin(angle) * wheelRadius;
      
      ctx.beginPath();
      ctx.moveTo(innerX, innerY);
      ctx.lineTo(outerX, outerY);
      ctx.strokeStyle = 'rgba(110, 89, 165, 0.18)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    // Add site title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 80px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('seven spoke', centerX, centerY - 50);
    
    // Add tagline matching the site
    ctx.fillStyle = '#6E59A5';
    ctx.font = 'normal 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('life sciences sales & marketing', centerX, centerY + 20);
    ctx.fillText('technology consultant', centerX, centerY + 60);
    
    // Create a blob URL for the image
    const dataUrl = canvas.toDataURL('image/png');
    
    // Update the meta tags
    updateMetaTags(dataUrl);
    
    console.log('Social share image generated successfully');
  }, []);
  
  // Function to update meta tags with the new image URL
  const updateMetaTags = (imageUrl: string) => {
    // This will only work if the component is mounted in a browser environment
    if (typeof document !== 'undefined') {
      // Update Open Graph meta tags
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', imageUrl);
      }
      
      // Update Twitter meta tags
      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) {
        twitterImage.setAttribute('content', imageUrl);
      }
    }
  };
  
  return (
    <div className="hidden">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default SocialShareImage;
