import LoadingPage from "@/component/common/LoadingPage";
import MainView from "@/component/view/MainView";
import { Suspense, use } from "react";

export default function Page() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <MainContent />
    </Suspense>
  );
}

function MainContent() {
  use(wait(2000));
  return <MainView />;
}

// Helper: 3초 또는 지정한 시간(ms) 동안 대기
const wait = (ms = 3000) => new Promise((resolve) => setTimeout(resolve, ms));
