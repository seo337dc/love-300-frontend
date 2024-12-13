import React from "react";
import { QRCodeSVG } from "qrcode.react";

interface QRCodeGeneratorProps<T = any> {
  data: T;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-5 mt-[50px]">
      <QRCodeSVG
        value={typeof data === "string" ? data : JSON.stringify(data)}
        size={220}
      />
    </div>
  );
};

export default QRCodeGenerator;
