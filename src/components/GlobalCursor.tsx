import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const GlobalCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Pointer */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 250,
          mass: 0.1,
        }}
      >
        {/* Electric Particles Around Cursor */}
        <motion.div
          className="absolute"
          style={{
            width: '40px',
            height: '40px',
            left: '0px',
            top: '-5px',
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: '3px',
                height: '3px',
                background: 'rgba(253, 224, 71, 1)',
                boxShadow: '0 0 6px rgba(250, 204, 21, 1), 0 0 10px rgba(250, 204, 21, 0.6)',
                left: '10px',
                top: '10px',
                transform: `rotate(${i * 45}deg) translateX(${12 + Math.random() * 4}px)`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
                x: [0, (Math.random() - 0.5) * 6, 0],
                y: [0, (Math.random() - 0.5) * 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Main Cursor Arrow Shape */}
        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.8)) drop-shadow(0 0 15px rgba(250, 204, 21, 0.4))',
          }}
          animate={{
            scale: isClicking ? 0.85 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          {/* Outer glow */}
          <path
            d="M 4 4 L 4 22 L 10 16 L 14 24 L 16 23 L 12 15 L 20 15 Z"
            fill="rgba(253, 224, 71, 0.3)"
            stroke="rgba(250, 204, 21, 0.6)"
            strokeWidth="2"
          />
          {/* Main cursor body */}
          <path
            d="M 5 5 L 5 20 L 10 15 L 13 22 L 15 21 L 12 14 L 18 14 Z"
            fill="url(#cursorGradient)"
            stroke="rgba(253, 224, 71, 1)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Highlight */}
          <path
            d="M 6 6 L 6 18 L 10 14 L 12 19 L 13 18.5 L 11 13 L 16 13 Z"
            fill="rgba(255, 255, 255, 0.4)"
          />
          <defs>
            <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(253, 224, 71, 1)" />
              <stop offset="50%" stopColor="rgba(250, 204, 21, 0.95)" />
              <stop offset="100%" stopColor="rgba(252, 211, 77, 0.9)" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Energy Trail */}
        <motion.div
          className="absolute"
          style={{
            width: '20px',
            height: '20px',
            left: '4px',
            top: '4px',
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: '2px',
                height: '8px',
                background: 'linear-gradient(to bottom, rgba(253, 224, 71, 0.8), transparent)',
                boxShadow: '0 0 4px rgba(250, 204, 21, 0.6)',
                left: `${6 + i * 3}px`,
                top: `${6 + i * 3}px`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Click Energy Burst */}
      {isClicking && (
        <>
          <motion.div
            className="fixed pointer-events-none z-[9998]"
            initial={{
              left: cursorPos.x - 15,
              top: cursorPos.y - 15,
              scale: 0.3,
              opacity: 1,
            }}
            animate={{
              scale: 2,
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="rounded-full"
              style={{
                width: '30px',
                height: '30px',
                border: '2px solid rgba(250, 204, 21, 1)',
                boxShadow: '0 0 20px rgba(250, 204, 21, 1)',
              }}
            />
          </motion.div>
          
          {/* Click spark burst */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed pointer-events-none z-[9998]"
              initial={{
                left: cursorPos.x,
                top: cursorPos.y,
                opacity: 1,
              }}
              animate={{
                x: Math.cos((i * 60 * Math.PI) / 180) * 30,
                y: Math.sin((i * 60 * Math.PI) / 180) * 30,
                opacity: 0,
              }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="rounded-full"
                style={{
                  width: '4px',
                  height: '4px',
                  background: 'rgba(253, 224, 71, 1)',
                  boxShadow: '0 0 6px rgba(250, 204, 21, 1)',
                }}
              />
            </motion.div>
          ))}
        </>
      )}
    </>
  );
};
