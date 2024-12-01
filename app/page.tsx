// import { Suspense, use } from "react";
// import LoadingPage from "@/component/common/LoadingPage";
import MainView from "@/component/view/MainView";

export default function Page() {
  return (
    <MainView />
    // <Suspense fallback={<LoadingPage />}>
    //   <MainContent />
    // </Suspense>
  );
}

// function MainContent() {
//   use(wait(2000));
//   return <MainView />;
// }

// const wait = (ms = 3000) => new Promise((resolve) => setTimeout(resolve, ms));
