import React, { useState, useEffect, useRef } from "react";
const black_logo = "/Assets/logo_black.jpg";

const MESSAGES = [
  "Loading telemetry...",
  "Synchronizing race data...",
  "Preparing dashboard...",
  "Connecting to timing systems...",
];

function Loader() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const backgroundImage = black_logo;
  const displayMessage = MESSAGES[msgIndex];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisible(false);

      timeoutRef.current = setTimeout(() => {
        setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
        setVisible(true);
      }, 50);
    }, 300);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-black"
      role="status"
      aria-live="polite"
      aria-label={displayMessage}
    >
      <div
        className="loader-bg absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="loader-vignette absolute inset-0 pointer-events-none" />

      <div className="relative flex flex-col items-center px-6">
        <div className="loader-track relative w-55 sm:w-60 md:w-65 h-0.75 rounded-full bg-white/10 overflow-hidden mb-8 sm:mb-9">
          <div className="loader-fill absolute top-0 left-0 h-full w-1/3 rounded-full bg-[#E10600]" />
        </div>

        <p
          className={`text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#9A9A9A] transition-opacity duration-400 ease-out select-none ${
            visible ? "opacity-75" : "opacity-0"
          }`}
        >
          {displayMessage}
        </p>
      </div>

      <style>{`
        .loader-bg {
          filter: blur(9px) brightness(0.55);
          transform: scale(1.08);
          animation: loader-zoom 18s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes loader-zoom {
          from {
            transform: scale(1.08);
          }
          to {
            transform: scale(1.14);
          }
        }

        .loader-vignette {
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0) 45%,
            rgba(0, 0, 0, 0.45) 100%
          );
        }

        .loader-track {
          animation: loader-fade-in 0.9s ease-out both;
        }

        @keyframes loader-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .loader-fill {
          box-shadow: 0 0 8px rgba(225, 6, 0, 0.6);
          animation: loader-slide 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          will-change: transform;
        }

        @keyframes loader-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loader-bg {
            animation: none;
            transform: scale(1.08);
          }

          .loader-track {
            animation: none;
            opacity: 1;
          }

          .loader-fill {
            animation: none;
            transform: translateX(0);
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Loader;
