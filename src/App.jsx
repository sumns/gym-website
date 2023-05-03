import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Trainer from "./pages/Trainer/Trainer";
import Pricing from "./pages/Pricing/Pricing";
import JoinUs from "./pages/JoinUs/JoinUs";
import TrainingProgramPage from "./pages/trainingProgramPage/TrainingProgramPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<TrainingProgramPage />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/joining" element={<JoinUs />} />

        <Route path="/*" element={<h1>404: Page Not found</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
