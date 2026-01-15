import React from 'react';

interface IECLBLogoProps {
  className?: string;
}

export const IECLBLogo: React.FC<IECLBLogoProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200" 
      className={className}
      aria-label="Logo IECLB"
    >
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15"/>
        </filter>
      </defs>

      {/* Spire / Tent Shape - White with Stroke */}
      <path 
        d="M100 15 C 100 15, 55 90, 30 165 C 65 150, 135 150, 170 165 C 145 90, 100 15, 100 15 Z" 
        fill="#ffffff" 
        stroke="#1a1a1a" 
        strokeWidth="1.5"
        filter="url(#shadow)"
      />
      
      {/* Red Globe */}
      <circle cx="100" cy="138" r="24" fill="#bf0a30" stroke="#1a1a1a" strokeWidth="1" />
      
      {/* Globe Grid Lines */}
      {/* Longitude */}
      <ellipse cx="100" cy="138" rx="12" ry="24" fill="none" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.6" />
      <line x1="100" y1="114" x2="100" y2="162" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.6" />
      
      {/* Latitude */}
      <line x1="76" y1="138" x2="124" y2="138" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.6" />
      <path d="M78 126 Q 100 130, 122 126" fill="none" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.6" />
      <path d="M78 150 Q 100 146, 122 150" fill="none" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.6" />

      {/* Cross */}
      <g stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round">
        <line x1="100" y1="50" x2="100" y2="135" />
        <line x1="82" y1="75" x2="118" y2="75" />
      </g>
    </svg>
  );
};