import { useState } from "react";
import { styled } from "styled-components";
import { Colors } from "@/common/constant";
import Icon from "@/components/ui/Icon";
import ModalMyInfo from "@/components/ui/modal/ModalMyInfo";

const HeaderSection = () => {
  const id = "d859390524f10a499a7200581cda636e277c3b9e6";

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <section className="w-full pt-12">
      <div className="max-w-[120px] cursor-pointer" onClick={handleOpen}>
        <div className="flex items-center">
          <p>My Wallet</p>
          <Icon fileName="right-small.png" alt="arrow right sm" />
        </div>
        <WalletAddressText>{id}</WalletAddressText>
      </div>

      {isOpen && <ModalMyInfo data={id} onClose={handleClose} />}
    </section>
  );
};

export default HeaderSection;

const WalletAddressText = styled.span`
  max-width: 100px;
  height: 20px;
  color: ${Colors.Neutral7};

  white-space: nowrap; /* 텍스트가 한 줄로 표시 */
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis; /* 말줄임표 처리 */
  display: inline-block; /* 말줄임표 작동을 위한 설정 */
`;
