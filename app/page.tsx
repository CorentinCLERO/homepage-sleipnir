"use client";

import { useEffect, useRef, useState } from "react";
import "./page.css";

export default function Home() {
  const blockRef = useRef(null);
  const [visibleRatio, setVisibleRatio] = useState(0);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisibleRatio(entry.intersectionRatio);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="h-screen" ref={blockRef}>
        <div
          className="fixed h-screen w-screen image-sleipnir-background flex flex-col"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${1 - visibleRatio})`,
          }}
        >
          <h1
            className="font-bold text-9xl textp h-screen w-screen flex justify-center items-center"
            style={{
              color: `rgb(0 0 0 / ${0.3 - visibleRatio})`,
            }}
          >
            SLEIPNIR
          </h1>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
