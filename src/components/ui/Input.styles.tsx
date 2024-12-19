import { Colors } from "@/common/constant";
import { styled } from "styled-components";

export const InputContent = styled.input<{
  $bgColor: "netural" | "white";
  $isError?: boolean;
}>`
  width: 100%;
  padding: 11px 40px 11px 12px; /* 아이콘 위치 공간 확보 */
  border-radius: 5px;
  background-color: ${({ $bgColor }) =>
    $bgColor === "netural" ? Colors.NeutralF : Colors.White};
  color: ${Colors.Neutral5};
  border: 1px solid
    ${({ $isError }) => ($isError ? Colors.Error : Colors.Neutral3)};

  &::placeholder {
    color: ${Colors.NeutralA}; /* 원하는 색상 코드 */
    //  font-size: 14px; /* 글꼴 크기도 조정 가능 */
    //  font-style: italic; /* 기울임꼴 등 다른 스타일도 적용 가능 */
  }
`;

export const Text = styled.span<{ $isCusor?: boolean }>`
  font-size: 16px;
  font-weight: 400;
  color: linear-gradient(135deg, #064567 0%, #e71139 100%);
  cursor: ${(props) => props.$isCusor && "pointer"};
`;

export const DescText = styled.span`
  color: ${Colors.Neutral7};
  font-size: 12px;
  font-weight: 300;
`;

export const EyeImg = styled.img`
  position: absolute;
  z-index: 4;
  top: 10px;
  right: 10px;
`;

export const NumberInputContainer = styled.input`
  font-size: 30px;
  font-weight: 600;
  border: none;
  outline: none;
  background-color: transparent;

  &:focus {
    border: none; /* 포커스 시 border 제거 */
    box-shadow: none; /* 포커스 시 그림자 제거 */
  }
`;

export const SearchInputWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 40px;
  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 50px;

  background-color: ${Colors.NeutralF};
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 10px;

  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 50px;
  background-color: ${Colors.NeutralF};

  &:focus {
    background-color: #f1f1f1;
    border-color: #023319;
  }
`;

export const AddressInputWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 40px;
  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;

  background-color: ${Colors.White};
  border: 1px solid ${Colors.Neutral7};
`;

export const AddressInput = styled.input`
  width: 90%;
  height: 38px;
  padding: 10px;

  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 50px;

  &:focus {
    border-color: #023319;
  }
`;

export const ErrorText = styled.p`
  padding: 4px 0;
  font-size: 12px;
  font-weight: 300;
  color: ${Colors.Error};
`;
