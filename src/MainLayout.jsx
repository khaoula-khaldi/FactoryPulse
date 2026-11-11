
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="flex min-h-screen bg-[#F5F5F0]">

            <NavBar />

            <div className="flex-1 min-w-0 flex flex-col">

                <Header />

                <main className="flex-1 p-8">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}

export default MainLayout;
