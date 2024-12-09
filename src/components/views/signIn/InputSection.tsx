import { Colors } from "@/common/constant";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { styled } from "styled-components";

const InputSection = () => {
  const handleMoveSignup = () => {};

  return (
    <section>
      <Input
        title="ID"
        button="새 계정 만들기"
        placeholder="아이디 입력"
        onClick={handleMoveSignup}
      />
      <Input type="password" title="Password" placeholder="비밀번호 입력" />

      <LinkContainer>
        <Link href="">아이디 찾기</Link>
        <span>|</span>
        <Link href="">비밀번호 찾기</Link>
      </LinkContainer>
    </section>
  );
};

export default InputSection;

// 아이디 찾기ㅣ비밀번호 찾기
const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  font-weight: 400;
  font-size: 16px;
  color: ${Colors.Neutral7};
`;
