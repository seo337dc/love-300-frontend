import { useMemo, useState } from "react";
import { Colors } from "@/common/constant";

import Nimonic from "@/components/template/Nimonic";
import Button from "@/components/ui/Button";
import Popup from "@/components/ui/Popup";
import useNimonicStore from "@/store/nimonicStore";

type TProps = {
  handleNext: () => void;
};
const Step4 = ({ handleNext }: TProps) => {
  const { nimonic } = useNimonicStore();

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleCopy = () => {
    const nimonicText = nimonic.join(" "); // 니모닉 배열을 문자열로 변환
    navigator.clipboard
      .writeText(nimonicText)
      .then(() => {
        alert("니모닉이 클립보드에 복사되었습니다!");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
        alert("복사에 실패했습니다. 다시 시도해주세요.");
      });
  };

  const memoDisable: boolean = useMemo(() => {
    const isNone = nimonic.find((nimonicData) => nimonicData === "");
    return isNone === "";
  }, [nimonic]);

  return (
    <section>
      <div className="min-h-[500px] flex flex-col justify-center items-center">
        <p className="font-medium text-lg mb-5">니모닉 생성</p>
        <Nimonic />

        <Button
          width="120px"
          height="40px"
          bgColor={Colors.NeutralF}
          color={Colors.Black}
          onClick={handleCopy}
        >
          니모닉 복사
        </Button>
      </div>

      {isOpen && (
        <Popup
          onClose={() => setIsOpen(false)}
          message={
            <div>
              <p>니모닉 화면을 캡처하거나</p>
              <p>단어들을 기록하여 백업하셨나요?</p>
            </div>
          }
          warning="* 니모닉 정보가 없으면 계정 복구가 불가합니다 *"
        />
      )}

      <Button className="my-4" disabled={memoDisable} onClick={handleNext}>
        다음
      </Button>
    </section>
  );
};

export default Step4;
