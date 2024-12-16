import { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "@/common/constant";
import Button from "../ui/Button";

type TProps = {
  actionAfter: () => void;
};

const SecondPwdTemplate = ({ actionAfter }: TProps) => {
  const [password, setPassword] = useState<string[]>(["", "", "", ""]);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  // 키보드 이벤트 처리
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key >= "0" && event.key <= "9") {
      handleKeyPress(parseInt(event.key, 10)); // 해당 숫자 입력 처리
    } else if (event.key === "Backspace") {
      handleBackspace(); // 백스페이스 처리
    }
  };

  const handleKeyPress = (key: number) => {
    const newPassword = [...password];
    for (let i = 0; i < newPassword.length; i++) {
      if (newPassword[i] === "") {
        newPassword[i] = key.toString();
        setPassword(newPassword);
        setVisibleIndex(i); // 해당 자리의 숫자가 보이도록 설정
        break;
      }
    }
  };

  const handleBackspace = () => {
    const newPassword = [...password];
    for (let i = newPassword.length - 1; i >= 0; i--) {
      if (newPassword[i] !== "") {
        newPassword[i] = "";
        setPassword(newPassword);
        setVisibleIndex(null); // 마지막 값을 삭제하고 닷으로 변경
        break;
      }
    }
  };

  const handleClickNext = () => {
    actionAfter();
  };

  // 숫자가 보인 인덱스를 설정 후, 1초 뒤에 자동으로 숨기기
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visibleIndex !== null) {
      timer = setTimeout(() => {
        setVisibleIndex(null); // 1초 뒤에 숫자 숨기기
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [visibleIndex]);

  // 키보드 이벤트 리스너 등록
  useEffect(() => {
    const handleKeyDownWrapper = (event: KeyboardEvent) => {
      handleKeyDown(event);
    };

    window.addEventListener("keydown", handleKeyDownWrapper);

    return () => {
      window.removeEventListener("keydown", handleKeyDownWrapper);
    };
  }, [password]);

  return (
    <section className="h-[70vh]">
      <div className="h-[50vh] flex flex-col justify-center items-center">
        <p className="font-medium text-lg mb-5">2차 비밀번호 입력</p>
        <div className="flex gap-2">
          {password.map((digit, index) => (
            <Dot key={index} $isDigit={!!digit}>
              {digit && visibleIndex === index ? digit : "•"}
            </Dot>
          ))}
        </div>
      </div>

      <Button onClick={actionAfter}>다음</Button>
    </section>
  );
};

export default SecondPwdTemplate;

const Dot = styled.div<{ $isDigit: boolean }>`
  text-align: center;
  font-size: 48px; /* 글자 크기 키우기 */
  font-weight: bold;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: text;

  color: ${({ $isDigit }) => !$isDigit && Colors.NeutralA}; /* 닷 색상 변경 */
`;
