"use client";

const LoadingPage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full py-10 z-50 flex flex-col justify-center items-center gap-4 bg-white">
      <span
        className="material-icons text-4xl"
        style={{ fontSize: "50px" }} // 크기 조정
      >
        hourglass_top
      </span>
      <p className="text-4xl">페이지 불러오는 중...</p>
    </div>
  );
};

export default LoadingPage;
