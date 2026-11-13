import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

function MachinesSection({ machines = [] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const machinesFiltrees = machines.filter((machine)=>{
        return  machine.status.toLowerCase().includes(searchTerm.toLowerCase());
    })
    return (
        <section className="space-y-6">
           {console.log(machines)} 
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Toutes les machines
                    </h2>
                    <div className="flex items-center gap-3 bg-[#F5F5F0] px-4 py-3 rounded-xl w-80">
                        <Search size={22} className="text-black/30 shrink-0"/>
                        <input type="text" id="recherche"
                        onChange={(event) => {setSearchTerm(event.target.value)
                            console.log(event.target.value)
                        } }
                        placeholder="Rechercher une machine" className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"/>

                    </div>

                    <p className="text-sm text-gray-500 mt-1">
                        Gérez et consultez vos machines industrielles.
                    </p>
                </div>

                <Link to="/add-machine" className="bg-[#73866D] text-white px-5 py-3 rounded-xl">
                    Ajouter une machine
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {machinesFiltrees.map((machine) => (
                <div
                key={machine.id}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                <div className="flex items-start justify-between">
                    <div>
                    <p className="text-lg font-semibold text-gray-800">
                        {machine.name}
                    </p>

                    <p className="text-sm text-gray-400 mt-1"> 
                        ID : {machine.id}
                    </p>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#E8EEE5] text-[#73866D]">
                    {machine.status}
                    </span>
                </div>
                </div>
            ))}
            </div>
        </section>
    );
}

export default MachinesSection;