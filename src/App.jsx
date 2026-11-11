import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Machines from "./pages/Machines"
import addMachine from "./pages/AjouterMachine";
import MainLayout from "./MainLayout"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="table de bord" element={<Home />} />
          <Route path="Machines" element={<Machines />} />
          <Route path="addMachine" element={<addMachine/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;