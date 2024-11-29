const Loading = () => {
  return (
    <div className="fixed w-screen h-screen left-0 top-0 flex flex-col justify-center items-center gap-4 bg-white opacity-50">
      <span
        className="material-icons text-4xl"
        style={{ fontSize: "0px" }} // 크기 조정
      >
        refresh
      </span>
      <p className="text-4xl">데이터 불러오는 중...</p>
    </div>
  );
};

export default Loading;
