import QRCodeGenerator from "@/components/template/QRCodeGenerator";
import IconButton from "../ui/IconButton";

type TProps = {
  data: string;
  size?: number;
};

const Wallet = ({ data, size }: TProps) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        alert("주소를 클립보드에 복사되었습니다!");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
        alert("복사에 실패했습니다. 다시 시도해주세요.");
      });
  };

  const link = `${location.origin}/send?input=${data}`;

  return (
    <section>
      <h1 className="font-semibold text-base">My Wallet</h1>
      <p className="max-w-[200px] break-words font-light text-sm">{data}</p>
      <QRCodeGenerator data={data} size={size} />

      <div className="flex justify-center gap-20 py-8">
        <IconButton
          fileName="share.png"
          alt="share icon"
          text="QR 공유하기"
          onClick={async () => {
            if (navigator?.share) {
              await navigator.share({ url: link });
              alert("복사 되었습니다.");
            } else {
              alert("공유할 수 없습니다.");
            }
          }}
        />

        <IconButton
          fileName="copy.png"
          alt="copy icon"
          text="복사하기"
          onClick={handleCopy}
        />
      </div>
    </section>
  );
};

export default Wallet;
