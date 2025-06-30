"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import "./page.css";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 1)",
      "rgba(255, 255, 255, 1)",
    ]
  );

  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0.3]);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="h-screen">
        <motion.div
          className="fixed h-screen w-screen image-sleipnir-background flex flex-col"
          style={{ backgroundColor }}
        >
          <motion.h1
            className="font-bold text-9xl textp h-screen w-screen flex justify-center items-center"
            style={{
              color: useTransform(
                textOpacity,
                (opacity) => `rgb(0 0 0 / ${opacity})`
              ),
            }}
          >
            SLEIPNIR
          </motion.h1>
        </motion.div>
      </div>
      <div className="h-screen"></div>
      <div className="h-screen relative overflow-x-hidden">
        <p style={{ position: "absolute", left: "0%" }}>hello</p>
      </div>
    </div>
  );
}
