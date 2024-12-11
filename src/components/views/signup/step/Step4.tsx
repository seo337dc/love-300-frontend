import { Colors } from "@/common/constant";

import Nimonic from "@/components/template/Nimonic";
import Button from "@/components/ui/Button";
import Popup from "@/components/ui/Popup";
import { useState } from "react";

const Step4 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <section className="min-h-[500px] flex flex-col justify-center items-center">
      <p className="font-medium text-lg mb-5">니모닉 생성</p>
      <Nimonic />

      <Button
        width="120px"
        height="40px"
        bgColor={Colors.NeutralF}
        color={Colors.Black}
      >
        니모닉 복사
      </Button>

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
    </section>
  );
};

export default Step4;
