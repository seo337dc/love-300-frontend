import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { BrowserMultiFormatReader } from "@zxing/library";

const QRCodeReader: React.FC<{
  onScan: (data: string) => void;
  onStop: () => void;
}> = ({ onScan, onStop }) => {
  const webcamRef = useRef<Webcam>(null);
  const [, setResult] = useState<string | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    const interval = setInterval(async () => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          try {
            const result = await codeReader.decodeFromImage(
              undefined,
              imageSrc
            );
            if (result) {
              setResult(result.getText());
              onScan(result.getText());
              onStop(); // 카메라를 비활성화
            }
          } catch (err) {
            // QR code not found in this frame
          }
        }
      }
    }, 500); // Try to scan every 500ms

    return () => {
      clearInterval(interval);
    };
  }, [onScan, onStop]);

  return (
    <div className="flex flex-col items-center h-[80vh] w-full">
      <Webcam
        className="w-full h-full object-cover"
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        height={"100%"}
        videoConstraints={{ facingMode: "environment" }}
      />
    </div>
  );
};

export default QRCodeReader;
