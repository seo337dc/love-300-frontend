import { create } from "zustand";

interface NimonicState {
  nimonic: string[]; // 12개의 문자열 배열
  setNimonic: (index: number, value: string) => void; // 특정 인덱스의 값을 설정하는 함수
  clear: () => void;
}

const useNimonicStore = create<NimonicState>((set) => ({
  nimonic: Array(12).fill(""), // 초기 상태: 12개의 빈 문자열
  setNimonic: (index, value) =>
    set((state) => {
      const updatedNimonic = [...state.nimonic];
      updatedNimonic[index] = value;
      return { nimonic: updatedNimonic };
    }),
  clear: () => set({ nimonic: Array(12).fill("") }),
}));

export default useNimonicStore;
