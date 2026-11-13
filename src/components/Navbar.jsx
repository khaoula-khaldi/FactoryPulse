
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <aside className="w-64 min-h-screen bg-[#73866D] text-white flex flex-col p-6">

            <h1 className="text-2xl font-bold mb-12">
                FactoryPulse
            </h1>

            <ul className="flex flex-col gap-4">
                <li>
                    <Link to="/" className="block bg-[#F5F2E9] text-[#73866D] font-semibold px-4 py-4 rounded-2xl"> 
                    Tableau de bord
                    </Link>
                </li>

                <li>
                    <Link to="/Machines" className="block px-4 py-4 rounded-2xl text-white/90 hover:bg-white/15 transition"> 
                    Machines
                    </Link>
                </li>

                <li>
                    <Link to="/add-machine" className="block px-4 py-4 rounded-2xl text-white/90 hover:bg-white/15 transition"> 
                    Ajouter une machine
                    </Link>
                </li>
            </ul>

            <div className="mt-auto border-t border-white/30 pt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#CF805D] flex items-center justify-center font-semibold">
                    K
                </div>

                <p className="font-medium">Khaoula</p>
            </div>

        </aside>
    );
}

export default NavBar;
