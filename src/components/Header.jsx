
import { Search } from "lucide-react";

function Header() {
    return (
        <header className="w-full bg-white px-8 py-6 border-b border-gray-200 flex items-center justify-between">

            <div>
                <h1 className="text-2xl font-bold text-[#73866D]">
                    Machines Overview
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                    Surveillance et gestion des machines industrielles.
                </p>
            </div>

            <div className="flex items-center gap-3 bg-[#F5F5F0] px-4 py-3 rounded-xl w-80">
                <Search size={22} className="text-black/30 shrink-0"/>
                <input type="text" id="recherche" placeholder="Rechercher une machine" className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"/>

            </div>

        </header>
    );
}

export default Header;
