import { styled } from "styled-components";
import { Colors } from "@/common/constant";
import Icon from "../Icon";
import type { ReactNode } from "react";

type TProp = {
  width?: string;
  height?: string;
  onClose: () => void;
  children?: ReactNode;
};
const Modal = ({
  width = "300px",
  height = "300px",
  onClose,
  children = <></>,
}: TProp) => {
  return (
    <Overlay>
      <Wrap>
        <Icon
          className="absolute z-20 right-2 top-2 cursor-pointer"
          fileName="close.png"
          alt="close icon"
          onClick={onClose}
        />

        <Content width={width} height={height}>
          {children}
        </Content>
      </Wrap>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); // 배경 흐림 처리
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Wrap = styled.div`
  position: relative;
  background-color: ${Colors.White};
  border-radius: 8px;
`;

const Content = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 30px;
  background-color: ${Colors.White};
  border-radius: 8px;
`;
