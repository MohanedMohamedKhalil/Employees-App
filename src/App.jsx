import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className=" grid grid-cols-[auto_1fr] h-screen  ">
        <Sidebar />
        <section>
          <Header />
          <MainSection />
        </section>
      </div>
    </>
  );
}

export default App;
