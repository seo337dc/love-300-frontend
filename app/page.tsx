import MainView from "@/component/view/MainView";
import { getPatients } from "@/lib/api";

export default async function Page() {
  const patients = await getPatients({ _page: 0 }); // 서버사이드 테스트

  if (!patients) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  console.log("patients", patients);
  return <MainView />;
}
