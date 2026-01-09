import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function HomePage() {
  return (
    <div className="flex relative min-w-360 min-h-240">
      <Sidebar />
      <Main />

      <div className="w-full absolute  border-[0.5px] border-[#C8CBD9] z-100 top-16"></div>
    </div>
  );
}

export default HomePage;
