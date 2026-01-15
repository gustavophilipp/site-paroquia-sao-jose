import React from 'react';

interface ParishLogoProps {
  className?: string;
}

export const ParishLogo: React.FC<ParishLogoProps> = ({ className = "w-20 h-20" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200" 
      className={className}
      aria-label="Logo Paróquia Luterana de São José"
    >
      <defs>
        <path id="textPathTop" d="M 25,100 A 75,75 0 1,1 175,100" />
        <path id="textPathBottom" d="M 30,100 A 70,70 0 0,0 170,100" />
      </defs>

      {/* Outer Circle Ring */}
      <circle cx="100" cy="100" r="95" fill="#fff" stroke="#1e3a8a" strokeWidth="10" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#60a5fa" strokeWidth="2" />

      {/* Text on Path - Top */}
      <text fill="#1e3a8a" fontSize="13" fontWeight="bold" letterSpacing="1px">
        <textPath href="#textPathTop" startOffset="50%" textAnchor="middle" {...({ side: "left" } as any)}>
          PARÓQUIA LUTERANA DE SÃO JOSÉ/SC
        </textPath>
      </text>

      {/* Text on Path - Bottom */}
      <text fill="#1e3a8a" fontSize="11" fontWeight="bold" letterSpacing="1px">
        <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle" {...({ side: "right" } as any)}>
           IECLB - UNIDOS NA FÉ
        </textPath>
      </text>

      {/* Central Cross */}
      <g transform="translate(100, 100)">
        {/* Vertical Bar */}
        <rect x="-6" y="-60" width="12" height="110" fill="#1a1a1a" />
        {/* Horizontal Bar */}
        <rect x="-40" y="-15" width="80" height="12" fill="#1a1a1a" />
      </g>

      {/* Colored Squares (Luther Rose Colors) */}
      {/* Top Left - Orange */}
      <rect x="75" y="55" width="18" height="18" fill="#f97316" rx="1" />
      {/* Top Right - Pink */}
      <rect x="107" y="55" width="18" height="18" fill="#ec4899" rx="1" />
      {/* Bottom Left - Green */}
      <rect x="75" y="93" width="18" height="18" fill="#22c55e" rx="1" />
      {/* Bottom Right - Yellow */}
      <rect x="107" y="93" width="18" height="18" fill="#eab308" rx="1" />

      {/* House Icon (Left Side) */}
      <path 
        d="M 50,110 L 50,135 L 70,135 L 70,110 L 60,100 Z" 
        fill="none" 
        stroke="#ef4444" 
        strokeWidth="3" 
        strokeLinejoin="round"
      />
      <path d="M 45,110 L 60,95 L 75,110" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
      {/* Door */}
      <path d="M 57,135 L 57,122 A 3,3 0 0,1 63,122 L 63,135" fill="#ef4444" />
      {/* Dotted Path */}
      <path d="M 60,140 Q 70,145 80,150 Q 90,155 95,160" stroke="#b91c1c" strokeWidth="2" strokeDasharray="2,2" fill="none" />

      {/* Church Icon (Right Side) */}
      <path 
        d="M 130,135 L 150,135 L 150,100 L 130,80 L 130,135" 
        fill="none" 
        stroke="#3b82f6" 
        strokeWidth="2" 
      />
      <path d="M 130,80 L 130,60" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <path d="M 125,65 L 135,65" fill="none" stroke="#3b82f6" strokeWidth="2" />
      {/* Church Door */}
      <path d="M 136,135 L 136,120 A 4,4 0 0,1 144,120 L 144,135" fill="none" stroke="#3b82f6" strokeWidth="2" />

    </svg>
  );
};