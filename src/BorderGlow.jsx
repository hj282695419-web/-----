import React from 'react';
import './BorderGlow.css';
export default function BorderGlow({children,className='',backgroundColor='#120F17',borderRadius=28}){
  return <div className={`border-glow-card ${className}`} style={{'--card-bg':backgroundColor,'--border-radius':`${borderRadius}px`}}><div className="border-glow-inner">{children}</div></div>;
}
