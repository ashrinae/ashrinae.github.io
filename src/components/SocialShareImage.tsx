
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
    
    // Draw bicycle wheel with transparent elements
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const wheelRadius = 220;
    
    // Draw wheel rim
    ctx.beginPath();
    ctx.arc(centerX, centerY, wheelRadius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(110, 89, 165, 0.3)';  // Very transparent purple
    ctx.lineWidth = 5;
    ctx.stroke();
    
    // Draw inner rim
    ctx.beginPath();
    ctx.arc(centerX, centerY, wheelRadius - 15, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(110, 89, 165, 0.2)';  // More transparent
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw hub
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(110, 89, 165, 0.3)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(110, 89, 165, 0.4)';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Draw spokes
    const spokeCount = 24;
    for (let i = 0; i < spokeCount; i++) {
      const angle = (i / spokeCount) * Math.PI * 2;
      const innerX = centerX + Math.cos(angle) * 30;
      const innerY = centerY + Math.sin(angle) * 30;
      const outerX = centerX + Math.cos(angle) * wheelRadius;
      const outerY = centerY + Math.sin(angle) * wheelRadius;
      
      ctx.beginPath();
      ctx.moveTo(innerX, innerY);
      ctx.lineTo(outerX, outerY);
      ctx.strokeStyle = 'rgba(110, 89, 165, 0.25)'; // Very transparent spokes
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    
    // Draw text
    ctx.fillStyle = 'rgba(68, 51, 122, 0.85)';  // Darker purple but semi-transparent
    ctx.font = 'bold 80px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('seven spoke', canvas.width / 2, canvas.height / 2 - 80);
    
    ctx.fillStyle = 'rgba(68, 51, 122, 0.7)';  // Slightly more transparent
    ctx.font = '36px sans-serif';
    ctx.fillText('life sciences sales & marketing', canvas.width / 2, canvas.height / 2 + 120);
    ctx.fillText('technology consultant', canvas.width / 2, canvas.height / 2 + 170);
    
    // Export the canvas as an image
    const imageData = canvas.toDataURL('image/png');
    
    // Create a link to download the image
    const link = document.createElement('a');
    link.href = imageData;
    link.download = 'social-share-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);
  
  return (
    <div className="hidden">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default SocialShareImage;
