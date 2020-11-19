import "./App.css";
import Navbar from "./components/navbar";
import MainSection from "./components/mainSection";
import Education from "./components/education";
import Working from "./components/workingExperience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <Education />
      <Working />
    </div>
  );
}

export default App;
