"use client";

import { styled } from "styled-components";

const Footer = () => {
  return <Wrap>© 2024 LOVE300. All Rights Reserved.</Wrap>;
};

export default Footer;

const Wrap = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;

  font-size: 12px;
  font-weight: 300;
`;
