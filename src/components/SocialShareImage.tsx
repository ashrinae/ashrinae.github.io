
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
    
    // Lighter background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#f1f0fb');  // Light lavender tone
    gradient.addColorStop(1, '#e5deff');  // Soft purple-ish white
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw bicycle wheel with more transparent elements
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const wheelRadius = 220;
    
    // Draw wheel rim - more transparent
    ctx.beginPath();
    ctx.arc(centerX, centerY, wheelRadius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(110, 89, 165, 0.2)';  // Increased transparency
    ctx.lineWidth = 5;
    ctx.stroke();
    
    // Draw inner rim - more transparent
    ctx.beginPath();
    ctx.arc(centerX, centerY, wheelRadius - 15, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(110, 89, 165, 0.15)';  // Increased transparency
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw hub - more transparent
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(110, 89, 165, 0.2)';  // Increased transparency
    ctx.fill();
    ctx.strokeStyle = 'rgba(110, 89, 165, 0.25)';  // Increased transparency
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Draw exactly 7 spokes
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
      ctx.strokeStyle = 'rgba(110, 89, 165, 0.18)'; // More transparent spokes
      ctx.lineWidth = 2; // Slightly thicker to be visible despite transparency
      ctx.stroke();
    }
    
    // Draw text in black and remove subheaders
    ctx.fillStyle = '#000000'; // Changed to black
    ctx.font = 'bold 80px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('seven spoke', canvas.width / 2, canvas.height / 2 + 20); // Centered vertically
    
    // Export the canvas as a blob
    canvas.toBlob((blob) => {
      if (blob) {
        // Instead of triggering download, we just log that the image is ready
        console.log('Social share image generated successfully');
        
        // In a real application, we would upload this image to the server
        // But since we can't do that here, we'll use the pre-generated image
        // that should be in the public folder
      }
    }, 'image/png');
  }, []);
  
  return (
    <div className="hidden">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default SocialShareImage;
