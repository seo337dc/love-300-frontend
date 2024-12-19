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
      {/* 첫 번째 배경 (linear-gradient) */}
      <BackgroundGradient
        as={motion.div}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* 두 번째 배경 (흰색) */}
      <BackgroundWhite />

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
        <div className="text-xs font-light mb-4">
          © 2024 LOVE300. All Rights Reserved.
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default SplashScreen;

const gradientToWhite = `
  0% {
    background: linear-gradient(to bottom, #062b44, #e71e39); /* 초기 색상 */
  }
  100% {
    background: white; /* 최종 색상 */
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #062b44, #e71e39);
  z-index: 0;
`;

const BackgroundWhite = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  z-index: -1;
`;

const Wrapper = styled(motion.div)<{ isComplete: boolean }>`
  @keyframes gradientToWhite {
    ${gradientToWhite}
  }

  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  /* padding: 10px 0; */
  animation: ${({ isComplete }) =>
    isComplete ? "none" : `gradientToWhite 8s ease-in-out forwards`};

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
