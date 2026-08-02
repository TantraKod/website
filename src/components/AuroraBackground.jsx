import React, { useEffect, useState } from 'react';

export default function AuroraBackground() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Cursor Glow Tracker */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-indigo-600/15 blur-[120px] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${cursorPos.x - 192}px, ${cursorPos.y - 192}px)`
        }}
      />

      {/* Floating Aurora Orbs */}
      <div className="absolute top-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-indigo-600/20 blur-[120px] animate-aurora-1" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[130px] animate-aurora-2" />
      <div className="absolute top-[50%] left-[45%] w-[350px] h-[350px] rounded-full bg-purple-600/15 blur-[110px] animate-aurora-1" />
    </div>
  );
}
