import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsComplete(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper isComplete={isComplete}>
      <div />
      <div className="relative">
        <motion.div
          className="absolute left-[25%]"
          initial={{ scale: 1.5 }}
          animate={{ scale: 0.8, y: -75 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <HeartLogo />
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            className="flex flex-col items-center"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, y: 40, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <TextLogo />
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Subtitle>Crypto Wallet</Subtitle>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="text-xs font-light">
          © 2024 LOVE300. All Rights Reserved.
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default SplashScreen;

const Wrapper = styled.div<{ isComplete: boolean }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 10px 0;
  background: ${({ isComplete }) =>
    isComplete ? "#fff" : "linear-gradient(to bottom, #062b44, #e71e39)"};
  z-index: 9999;
`;

const HeartLogo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url("/images/symbol.png");
  background-size: cover;
  background-position: center;
`;

const TextLogo = styled.div`
  width: 208px;
  height: 37px;
  background-image: url("/images/logo.png");
  background-size: cover;
  background-position: center;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  margin-top: 0.5em;
`;
