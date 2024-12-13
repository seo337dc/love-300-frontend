import Icon from "./Icon";

type TProps = {
  fileName: string;
  alt: string;
  text: string;
  onClick: () => void;
};
const IconButton = ({ fileName, alt, text, onClick }: TProps) => {
  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer"
      onClick={onClick}
    >
      <Icon fileName={fileName} alt={alt} width="30px" height="30px" />
      <p className="font-normal text-base">{text}</p>
    </div>
  );
};

export default IconButton;
