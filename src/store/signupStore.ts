import { create } from "zustand";
import type { TSignup } from "@/types/signup";
import type { CountryData } from "react-phone-input-2";

const initCtry: CountryData = {
  name: "South Korea",
  dialCode: "82",
  countryCode: "kr",
  format: "+.. ... .... ....",
};

export const DEFAULT_SIGNUP: TSignup = {
  email: "",
  phone: "",
  country: initCtry,
  certification: "",
  id: "",
  password: "",
  checkPassword: "",
  secondPwd: ["", "", "", ""],
};

interface SignupState {
  signup: TSignup; // 12개의 문자열 배열
  setSignupField: (field: keyof TSignup, value: any) => void; // 특정 필드 값을 설정
  clear: () => void;
}

const useSignupStore = create<SignupState>((set) => ({
  signup: DEFAULT_SIGNUP, // 초기 상태: 12개의 빈 문자열
  setSignupField: (field, value) =>
    set((state) => ({
      signup: {
        ...state.signup,
        [field]: value, // 특정 필드 업데이트
      },
    })),
  clear: () => set({ signup: DEFAULT_SIGNUP }),
}));

export default useSignupStore;
