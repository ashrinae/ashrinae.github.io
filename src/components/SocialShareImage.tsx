
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
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#1A1F2C');
    gradient.addColorStop(1, '#6E59A5');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Create circular elements (like spokes)
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2;
      const radius = 180;
      const x = canvas.width / 2 + Math.cos(angle) * radius;
      const y = canvas.height / 2 + Math.sin(angle) * radius;
      
      // Draw spoke
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.lineTo(x, y);
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.stroke();
      
      // Draw circle at end of spoke
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fillStyle = '#9b87f5';
      ctx.fill();
    }
    
    // Central circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, Math.PI * 2);
    ctx.fillStyle = '#D6BCFA';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // Draw text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 80px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('seven spoke', canvas.width / 2, canvas.height / 2 - 80);
    
    ctx.fillStyle = '#E5DEFF';
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
