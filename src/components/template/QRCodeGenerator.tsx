import React from "react";
import { QRCodeSVG } from "qrcode.react";

interface QRCodeGeneratorProps<T = any> {
  data: T;
  size?: number;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  data,
  size = 220,
}) => {
  return (
    <div className="flex flex-col items-center gap-5 mt-[50px]">
      <QRCodeSVG
        value={typeof data === "string" ? data : JSON.stringify(data)}
        size={size}
      />
    </div>
  );
};

export default QRCodeGenerator;
