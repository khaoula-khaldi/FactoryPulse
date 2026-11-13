import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Machines from "./pages/Machines";
import AddMachine from "./pages/AjouterMachine";
import MainLayout from "./MainLayout";
import Dashboard from "./Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="machines" element={<Machines />} />
                        <Route path="add-machine" element={<AddMachine />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;