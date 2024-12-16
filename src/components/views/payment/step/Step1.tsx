import QRCodeReader from "@/components/template/QRCodeReader";

type TProps = {
  onNext: () => void;
};
const Step1 = ({ onNext }: TProps) => {
  return (
    <section className="relative h-screen">
      <QRCodeReader
        onScan={(data) => {
          // URL로부터 vendorId 부분만 추출
          const url = new URL(data);
          const vendorId = url.pathname.split("/").pop(); // 경로의 마지막 값 추출
          console.log("vendorId", vendorId);
          onNext();
        }}
        onStop={() => {}}
      />
    </section>
  );
};

export default Step1;
