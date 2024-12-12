import { styled } from "styled-components";

const IMG_URL = "/images";

type TProps = {
  fileName: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
};
const Icon = ({
  fileName,
  alt,
  width = "24px",
  height = "24px",
  className = "",
}: TProps) => {
  return (
    <IconImg
      src={`${IMG_URL}/${fileName}`}
      alt={alt}
      width={width}
      height={height}
      className={className} // className 전달
    />
  );
};

export default Icon;

const IconImg = styled.img<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
