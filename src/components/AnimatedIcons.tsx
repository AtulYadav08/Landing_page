// components/AnimatedIcons.tsx
// Create this new file and add all your animated icons here

import React from 'react';

// ========== WHY CHOOSE ELSEIF ICONS ==========

export const AnimatedBrainIcon = () => (
  <div className="w-16 h-16 mx-auto mb-4">
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <defs>
        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Brain outline with pulse animation */}
      <path 
        d="M32 8c-8 0-14 6-14 14 0 2 0.5 4 1.5 5.5-1 1-1.5 2.5-1.5 4.5 0 3 1.5 5.5 4 7-0.5 1-1 2.5-1 4 0 4 3 7 7 7h8c4 0 7-3 7-7 0-1.5-0.5-3-1-4 2.5-1.5 4-4 4-7 0-2-0.5-3.5-1.5-4.5 1-1.5 1.5-3.5 1.5-5.5 0-8-6-14-14-14z"
        fill="url(#brainGradient)"
        filter="url(#glow)"
        opacity="0.9"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;1.05;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Neural connections with flowing animation */}
      <g stroke="#0DD3B0" strokeWidth="1.5" fill="none" opacity="0.8">
        <path d="M20 25 L28 20 L36 25 L44 20">
          <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="3s" repeatCount="indefinite"/>
        </path>
        <path d="M22 35 L30 30 L38 35 L42 30">
          <animate attributeName="stroke-dasharray" values="100,0;50,50;0,100" dur="3s" repeatCount="indefinite"/>
        </path>
        <path d="M24 42 L32 40 L40 42">
          <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0" dur="2.5s" repeatCount="indefinite"/>
        </path>
      </g>
      
      {/* Pulsing dots */}
      <circle cx="26" cy="22" r="2" fill="#0DD3B0">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="38" cy="22" r="2" fill="#0DD3B0">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="32" cy="32" r="2" fill="#0DD3B0">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>
);

export const AnimatedRocketIcon = () => (
  <div className="w-16 h-16 mx-auto mb-4">
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <defs>
        <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
        <radialGradient id="flameGradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="50%" stopColor="#FF8E53" />
          <stop offset="100%" stopColor="#FF6B6B" />
        </radialGradient>
      </defs>
      
      {/* Rocket body with hover lift */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;0,-2;0,0"
          dur="2s"
          repeatCount="indefinite"
        />
        
        <path 
          d="M32 8 L28 16 L28 40 L36 40 L36 16 Z"
          fill="url(#rocketGradient)"
          opacity="0.9"
        />
        
        {/* Rocket fins */}
        <path d="M24 35 L28 30 L28 40 Z" fill="url(#rocketGradient)" opacity="0.7"/>
        <path d="M40 35 L36 30 L36 40 Z" fill="url(#rocketGradient)" opacity="0.7"/>
        
        {/* Window */}
        <circle cx="32" cy="20" r="3" fill="#00D4AA" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      {/* Animated flames */}
      <g>
        <path d="M30 40 L32 48 L34 40" fill="url(#flameGradient)" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.2;0.8;1"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M28 42 L30 50 L32 42" fill="url(#flameGradient)" opacity="0.6">
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.8;1;1.3;0.8"
            dur="0.7s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M34 42 L36 50 L38 42" fill="url(#flameGradient)" opacity="0.6">
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1.1;0.9;1.2;1.1"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      {/* Sparkles around rocket */}
      <g fill="#0DD3B0" opacity="0.7">
        <circle cx="20" cy="15" r="1">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="44" cy="18" r="1">
          <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="18" cy="30" r="1">
          <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  </div>
);

export const AnimatedGearsIcon = () => (
  <div className="w-16 h-16 mx-auto mb-4">
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <defs>
        <linearGradient id="gearGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
        <linearGradient id="gearGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00D4AA" />
          <stop offset="100%" stopColor="#0DD3B0" />
        </linearGradient>
      </defs>
      
      {/* Large gear - clockwise rotation */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 28 28;360 28 28"
          dur="4s"
          repeatCount="indefinite"
        />
        
        {/* Gear teeth */}
        <path 
          d="M28 8 L30 12 L26 12 Z M40 12 L44 14 L40 18 Z M48 24 L52 28 L48 32 Z M44 44 L40 48 L36 44 Z M28 48 L26 52 L22 48 Z M12 44 L8 40 L12 36 Z M8 24 L4 20 L8 16 Z M12 12 L16 8 L20 12 Z"
          fill="url(#gearGradient1)"
        />
        
        {/* Gear body */}
        <circle cx="28" cy="28" r="12" fill="url(#gearGradient1)" opacity="0.9"/>
        <circle cx="28" cy="28" r="6" fill="#0a0a0a"/>
      </g>
      
      {/* Small gear - counter-clockwise rotation */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 45 20;-360 45 20"
          dur="3s"
          repeatCount="indefinite"
        />
        
        {/* Small gear teeth */}
        <path 
          d="M45 8 L47 10 L43 10 Z M53 13 L55 17 L51 15 Z M55 25 L57 27 L53 29 Z M51 35 L47 37 L45 33 Z M43 37 L39 35 L41 31 Z M37 29 L35 25 L39 23 Z M35 15 L37 11 L41 13 Z M43 10 L47 8 L45 12 Z"
          fill="url(#gearGradient2)"
        />
        
        {/* Small gear body */}
        <circle cx="45" cy="20" r="8" fill="url(#gearGradient2)" opacity="0.9"/>
        <circle cx="45" cy="20" r="4" fill="#0a0a0a"/>
      </g>
      
      {/* Connecting elements */}
      <path d="M36 24 L40 18" stroke="#0DD3B0" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
      </path>
      
      {/* Energy particles */}
      <g fill="#0DD3B0" opacity="0.8">
        <circle cx="32" cy="32" r="1">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;8,-8;16,-16"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="24" cy="24" r="1">
          <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;-6,6;-12,12"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  </div>
);

// ========== BUILD AI APPLICATIONS ICONS ==========

export const AnimatedChatbotIcon = () => (
  <div className="w-12 h-12">
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <defs>
        <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      
      {/* Chat bubble */}
      <path 
        d="M8 12 C8 8 12 4 18 4 L30 4 C36 4 40 8 40 12 L40 24 C40 28 36 32 30 32 L18 32 L8 38 Z"
        fill="url(#chatGradient)"
        opacity="0.9"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;1.05;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Typing dots */}
      <g fill="#0a0a0a">
        <circle cx="16" cy="18" r="2">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="24" cy="18" r="2">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="32" cy="18" r="2">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" begin="0.6s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      {/* AI sparkles */}
      <g fill="#0DD3B0" opacity="0.7">
        <circle cx="42" cy="8" r="1">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="6" cy="24" r="1">
          <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  </div>
);

export const AnimatedAgentIcon = () => (
  <div className="w-12 h-12">
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <defs>
        <linearGradient id="agentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
        <radialGradient id="coreGradient">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </radialGradient>
      </defs>
      
      {/* Central core */}
      <circle cx="24" cy="24" r="6" fill="url(#coreGradient)">
        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      {/* Orbiting nodes */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 24 24;360 24 24"
          dur="4s"
          repeatCount="indefinite"
        />
        <circle cx="24" cy="12" r="3" fill="url(#agentGradient)" opacity="0.8"/>
        <circle cx="36" cy="24" r="3" fill="url(#agentGradient)" opacity="0.8"/>
        <circle cx="24" cy="36" r="3" fill="url(#agentGradient)" opacity="0.8"/>
        <circle cx="12" cy="24" r="3" fill="url(#agentGradient)" opacity="0.8"/>
      </g>
      
      {/* Connection lines */}
      <g stroke="#0DD3B0" strokeWidth="1" opacity="0.6">
        <line x1="24" y1="18" x2="24" y2="12">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
        </line>
        <line x1="30" y1="24" x2="36" y2="24">
          <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite"/>
        </line>
        <line x1="24" y1="30" x2="24" y2="36">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="1s" repeatCount="indefinite"/>
        </line>
        <line x1="18" y1="24" x2="12" y2="24">
          <animate attributeName="opacity" values="1;0.6;1" dur="3s" begin="1s" repeatCount="indefinite"/>
        </line>
      </g>
    </svg>
  </div>
);

export const AnimatedRAGIcon = () => (
  <div className="w-12 h-12">
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <defs>
        <linearGradient id="ragGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      
      {/* Document stack */}
      <g>
        <rect x="8" y="12" width="20" height="24" rx="2" fill="url(#ragGradient)" opacity="0.6">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;2,-2;0,0"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="10" y="10" width="20" height="24" rx="2" fill="url(#ragGradient)" opacity="0.7">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;1,-1;0,0"
            dur="3s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="12" y="8" width="20" height="24" rx="2" fill="url(#ragGradient)" opacity="0.9"/>
      </g>
      
      {/* Knowledge extraction lines */}
      <g stroke="#0DD3B0" strokeWidth="1" fill="none">
        <path d="M32 15 Q38 15 38 20">
          <animate attributeName="stroke-dasharray" values="0,20;10,10;20,0" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M32 20 Q40 20 40 26">
          <animate attributeName="stroke-dasharray" values="20,0;10,10;0,20" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M32 25 Q36 25 36 30">
          <animate attributeName="stroke-dasharray" values="0,15;8,7;15,0" dur="2.5s" repeatCount="indefinite"/>
        </path>
      </g>
      
      {/* AI processing indicator */}
      <circle cx="40" cy="24" r="4" fill="url(#ragGradient)" opacity="0.8">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      {/* Text lines in document */}
      <g stroke="#0a0a0a" strokeWidth="1" opacity="0.3">
        <line x1="16" y1="14" x2="28" y2="14"/>
        <line x1="16" y1="18" x2="26" y2="18"/>
        <line x1="16" y1="22" x2="30" y2="22"/>
        <line x1="16" y1="26" x2="24" y2="26"/>
      </g>
    </svg>
  </div>
);

export const AnimatedContentIcon = () => (
  <div className="w-12 h-12">
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <defs>
        <linearGradient id="contentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      
      {/* Writing pad */}
      <rect x="8" y="6" width="32" height="36" rx="4" fill="url(#contentGradient)" opacity="0.1" stroke="url(#contentGradient)" strokeWidth="2"/>
      
      {/* Animated writing lines */}
      <g stroke="url(#contentGradient)" strokeWidth="2" fill="none" opacity="0.8">
        <line x1="12" y1="14" x2="36" y2="14">
          <animate attributeName="x2" values="12;36" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="12" y1="20" x2="32" y2="20">
          <animate attributeName="x2" values="12;32" dur="2.2s" begin="0.5s" repeatCount="indefinite"/>
        </line>
        <line x1="12" y1="26" x2="38" y2="26">
          <animate attributeName="x2" values="12;38" dur="1.8s" begin="1s" repeatCount="indefinite"/>
        </line>
        <line x1="12" y1="32" x2="30" y2="32">
          <animate attributeName="x2" values="12;30" dur="2.1s" begin="1.5s" repeatCount="indefinite"/>
        </line>
      </g>
      
      {/* Writing cursor */}
      <line x1="30" y1="32" x2="30" y2="36" stroke="url(#contentGradient)" strokeWidth="2">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;8,8;16,16;0,0"
          dur="8s"
          repeatCount="indefinite"
        />
      </line>
      
      {/* Sparkle effects */}
      <g fill="#0DD3B0" opacity="0.7">
        <path d="M40 10 L42 12 L40 14 L38 12 Z">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
          <animateTransform attributeName="transform" type="rotate" values="0 40 12;360 40 12" dur="4s" repeatCount="indefinite"/>
        </path>
        <path d="M14 38 L16 40 L14 42 L12 40 Z">
          <animate attributeName="opacity" values="1;0;1" dur="2.2s" repeatCount="indefinite"/>
          <animateTransform attributeName="transform" type="rotate" values="0 14 40;360 14 40" dur="3s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
  </div>
);

// ========== LLMOPS CAPABILITIES ICONS ==========

export const AnimatedModelIcon = () => (
  <div className="w-8 h-8">
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="modelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      
      {/* Neural network nodes */}
      <g fill="url(#modelGradient)">
        <circle cx="6" cy="8" r="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="16" cy="6" r="2">
          <animate attributeName="opacity" values="1;0.6;1" dur="2s" begin="0.3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="26" cy="8" r="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.6s" repeatCount="indefinite"/>
        </circle>
        
        <circle cx="6" cy="16" r="2">
          <animate attributeName="opacity" values="1;0.6;1" dur="2s" begin="0.9s" repeatCount="indefinite"/>
        </circle>
        <circle cx="16" cy="16" r="3" opacity="1"/>
        <circle cx="26" cy="16" r="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.2s" repeatCount="indefinite"/>
        </circle>
        
        <circle cx="6" cy="24" r="2">
          <animate attributeName="opacity" values="1;0.6;1" dur="2s" begin="1.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="16" cy="26" r="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="26" cy="24" r="2">
          <animate attributeName="opacity" values="1;0.6;1" dur="2s" begin="2.1s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      {/* Connecting lines */}
      <g stroke="url(#modelGradient)" strokeWidth="1" opacity="0.4">
        <line x1="8" y1="8" x2="14" y2="6"/>
        <line x1="18" y1="6" x2="24" y2="8"/>
        <line x1="8" y1="16" x2="13" y2="16"/>
        <line x1="19" y1="16" x2="24" y2="16"/>
        <line x1="8" y1="24" x2="14" y2="26"/>
        <line x1="18" y1="26" x2="24" y2="24"/>
      </g>
    </svg>
  </div>
);

export const AnimatedObservabilityIcon = () => (
  <div className="w-8 h-8">
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="obsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      
      {/* Chart bars */}
      <g fill="url(#obsGradient)">
        <rect x="4" y="20" width="3" height="8" rx="1">
          <animate attributeName="height" values="8;12;8" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="y" values="20;16;20" dur="2s" repeatCount="indefinite"/>
        </rect>
        <rect x="10" y="14" width="3" height="14" rx="1">
          <animate attributeName="height" values="14;18;14" dur="2.2s" repeatCount="indefinite"/>
          <animate attributeName="y" values="14;10;14" dur="2.2s" repeatCount="indefinite"/>
        </rect>
        <rect x="16" y="18" width="3" height="10" rx="1">
          <animate attributeName="height" values="10;16;10" dur="1.8s" repeatCount="indefinite"/>
          <animate attributeName="y" values="18;12;18" dur="1.8s" repeatCount="indefinite"/>
        </rect>
        <rect x="22" y="16" width="3" height="12" rx="1">
          <animate attributeName="height" values="12;20;12" dur="2.1s" repeatCount="indefinite"/>
          <animate attributeName="y" values="16;8;16" dur="2.1s" repeatCount="indefinite"/>
        </rect>
      </g>
      
      {/* Trend line */}
      <path d="M4 22 L10 16 L16 20 L22 14 L28 12" 
            stroke="url(#obsGradient)" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.8">
        <animate attributeName="stroke-dasharray" values="0,40;20,20;40,0" dur="3s" repeatCount="indefinite"/>
      </path>
      
      {/* Data points */}
      <g fill="#0DD3B0">
        <circle cx="28" cy="12" r="2">
          <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  </div>
);

export const AnimatedSecurityIcon = () => (
  <div className="w-8 h-8">
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="secGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      
      {/* Shield */}
      <path d="M16 4 L8 8 L8 18 C8 24 16 28 16 28 C16 28 24 24 24 18 L24 8 Z" 
            fill="url(#secGradient)" 
            opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
      </path>
      
      {/* Lock */}
      <rect x="12" y="16" width="8" height="6" rx="1" fill="#0a0a0a"/>
      <path d="M14 16 L14 12 C14 10 15 9 16 9 C17 9 18 10 18 12 L18 16" 
            stroke="#0a0a0a" 
            strokeWidth="2" 
            fill="none"/>
      
      {/* Security waves */}
      <g stroke="#0DD3B0" strokeWidth="1" fill="none" opacity="0.6">
        <circle cx="16" cy="16" r="10">
          <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="16" cy="16" r="8">
          <animate attributeName="r" values="8;10;8" dur="2s" begin="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" begin="1s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  </div>
);

export const AnimatedGlobeIcon = () => (
  <div className="w-8 h-8">
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      
      {/* Globe */}
      <circle cx="16" cy="16" r="12" stroke="url(#globeGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
      
      {/* Longitude lines */}
      <g stroke="url(#globeGradient)" strokeWidth="1" fill="none" opacity="0.6">
        <ellipse cx="16" cy="16" rx="12" ry="6"/>
        <ellipse cx="16" cy="16" rx="12" ry="3"/>
        <line x1="4" y1="16" x2="28" y2="16"/>
        <ellipse cx="16" cy="16" rx="6" ry="12"/>
      </g>
      
      {/* Rotating connection points */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 16 16;360 16 16"
          dur="6s"
          repeatCount="indefinite"
        />
        <circle cx="16" cy="6" r="1.5" fill="url(#globeGradient)">
          <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="26" cy="16" r="1.5" fill="url(#globeGradient)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="16" cy="26" r="1.5" fill="url(#globeGradient)">
          <animate attributeName="opacity" values="1;0.3;1" dur="3s" begin="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="6" cy="16" r="1.5" fill="url(#globeGradient)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="2.5s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  </div>
);

export const AnimatedAPIIcon = () => (
  <div className="w-8 h-8">
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      
      {/* API brackets */}
      <g stroke="url(#apiGradient)" strokeWidth="2" fill="none">
        <path d="M8 10 L4 16 L8 22">
          <animate attributeName="stroke-dasharray" values="0,24;12,12;24,0" dur="3s" repeatCount="indefinite"/>
        </path>
        <path d="M24 10 L28 16 L24 22">
          <animate attributeName="stroke-dasharray" values="24,0;12,12;0,24" dur="3s" repeatCount="indefinite"/>
        </path>
      </g>
      
      {/* Code elements */}
      <g fill="url(#apiGradient)" opacity="0.8">
        <rect x="12" y="12" width="8" height="2" rx="1">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
        </rect>
        <rect x="10" y="16" width="12" height="2" rx="1">
          <animate attributeName="opacity" values="1;0.8;1" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </rect>
        <rect x="14" y="20" width="6" height="2" rx="1">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="1s" repeatCount="indefinite"/>
        </rect>
      </g>
      
      {/* Data flow */}
      <g stroke="#0DD3B0" strokeWidth="1" opacity="0.6">
        <path d="M6 6 Q16 2 26 6">
          <animate attributeName="stroke-dasharray" values="0,20;10,10;20,0" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M6 26 Q16 30 26 26">
          <animate attributeName="stroke-dasharray" values="20,0;10,10;0,20" dur="2s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
  </div>
);

export const AnimatedScalingIcon = () => (
  <div className="w-8 h-8">
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="scaleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      
      {/* Growing bars */}
      <g fill="url(#scaleGradient)">
        <rect x="4" y="24" width="4" height="4" rx="1">
          <animate attributeName="height" values="4;8;12;8;4" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="y" values="24;20;16;20;24" dur="3s" repeatCount="indefinite"/>
        </rect>
        <rect x="10" y="22" width="4" height="6" rx="1">
          <animate attributeName="height" values="6;10;14;10;6" dur="3s" begin="0.5s" repeatCount="indefinite"/>
          <animate attributeName="y" values="22;18;14;18;22" dur="3s" begin="0.5s" repeatCount="indefinite"/>
        </rect>
        <rect x="16" y="20" width="4" height="8" rx="1">
          <animate attributeName="height" values="8;12;16;12;8" dur="3s" begin="1s" repeatCount="indefinite"/>
          <animate attributeName="y" values="20;16;12;16;20" dur="3s" begin="1s" repeatCount="indefinite"/>
        </rect>
        <rect x="22" y="18" width="4" height="10" rx="1">
          <animate attributeName="height" values="10;14;18;14;10" dur="3s" begin="1.5s" repeatCount="indefinite"/>
          <animate attributeName="y" values="18;14;10;14;18" dur="3s" begin="1.5s" repeatCount="indefinite"/>
        </rect>
      </g>
      
      {/* Scale arrows */}
      <g stroke="#0DD3B0" strokeWidth="2" fill="none" opacity="0.7">
        <path d="M2 12 L6 8 L10 12">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M22 12 L26 8 L30 12">
          <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
  </div>
);

export const AnimatedDevOpsIcon = () => (
  <div className="w-8 h-8">
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      
      {/* Infinity loop */}
      <path d="M8 16 C8 12 10 10 14 10 C18 10 20 14 20 16 C20 18 22 22 26 22 C28 22 30 20 30 16 C30 12 28 10 26 10 C22 10 20 14 20 16 C20 18 18 22 14 22 C10 22 8 20 8 16 Z" 
            stroke="url(#devopsGradient)" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.8">
        <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="4s" repeatCount="indefinite"/>
      </path>
      
      {/* Moving dot */}
      <circle r="2" fill="url(#devopsGradient)">
        <animateMotion dur="4s" repeatCount="indefinite">
          <path d="M8 16 C8 12 10 10 14 10 C18 10 20 14 20 16 C20 18 22 22 26 22 C28 22 30 20 30 16 C30 12 28 10 26 10 C22 10 20 14 20 16 C20 18 18 22 14 22 C10 22 8 20 8 16 Z"/>
        </animateMotion>
      </circle>
    </svg>
  </div>
);

export const AnimatedRoutingIcon = () => (
  <div className="w-8 h-8">
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0DD3B0" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      
      {/* Network nodes */}
      <g fill="url(#routeGradient)">
        <circle cx="6" cy="6" r="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="26" cy="6" r="2">
          <animate attributeName="opacity" values="1;0.6;1" dur="3s" begin="0.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="6" cy="26" r="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="26" cy="26" r="2">
          <animate attributeName="opacity" values="1;0.6;1" dur="3s" begin="1.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="16" cy="16" r="3" opacity="1"/>
      </g>
      
      {/* Smart routing paths */}
      <g stroke="#0DD3B0" strokeWidth="2" fill="none" opacity="0.7">
        <path d="M8 8 L14 14">
          <animate attributeName="stroke-dasharray" values="0,12;6,6;12,0" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M18 14 L24 8">
          <animate attributeName="stroke-dasharray" values="12,0;6,6;0,12" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </path>
        <path d="M14 18 L8 24">
          <animate attributeName="stroke-dasharray" values="0,12;6,6;12,0" dur="2s" begin="1s" repeatCount="indefinite"/>
        </path>
        <path d="M24 24 L18 18">
          <animate attributeName="stroke-dasharray" values="12,0;6,6;0,12" dur="2s" begin="1.5s" repeatCount="indefinite"/>
        </path>
      </g>
      
      {/* Data packets */}
      <g fill="#0DD3B0" opacity="0.8">
        <circle cx="10" cy="10" r="1">
          <animateMotion dur="3s" repeatCount="indefinite">
            <path d="M0,0 L6,6 L-6,-6 Z"/>
          </animateMotion>
        </circle>
      </g>
    </svg>
  </div>
);
