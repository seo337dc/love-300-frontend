import QRCodeGenerator from "@/components/template/QRCodeGenerator";
import IconButton from "../ui/IconButton";

type TProps = {
  data: string;
  size?: number;
};

const Wallet = ({ data, size }: TProps) => {
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
          onClick={() => {}}
        />

        <IconButton
          fileName="copy.png"
          alt="copy icon"
          text="복사하기"
          onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default Wallet;
