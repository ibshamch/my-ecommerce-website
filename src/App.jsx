import Header from "./Components/Header";
import Homepage from "./routes/Homepage";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
