
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function MachineForm() {
    const { machines, setMachines } = useOutletContext();

  const [errors, setErrors] = useState({name: "",id: "",status: ""});

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(machines)

        const formData = new FormData(event.target);

        const name = formData.get("name").trim();
        const id = formData.get("id").trim();
        const status = formData.get("status");

        const newErrors = {name: "",id: "",status: ""};

        if (!name) {
          newErrors.name = "Le nom de la machine est obligatoire.";
        }

        if (!id) {
          newErrors.id = "L'identifiant est obligatoire.";
        } else if (machines.some((machine) => String(machine.id) === id)) {
          newErrors.id = "Cet identifiant existe déjà.";
        }

        if (!status) {
          newErrors.status = "Veuillez choisir un statut.";
        }

        setErrors(newErrors);

        if (newErrors.name || newErrors.id || newErrors.status) {
          return;
        }
        const donneesFormulaire ={name,id:Number(id),status}
        setMachines((prevMachines) => 
            [
            ...prevMachines,
            { ...donneesFormulaire }
        ]);
        console.log(name, id, status);
        console.log(machines)
        
      }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Ajouter une machine
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Remplissez les informations de la nouvelle machine.
        </p>


      </div>

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nom de la machine
        </label>
        <input id="name" name="name" type="text" placeholder="Ex : Machine CNC" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#73866D] focus:ring-2 focus:ring-[#73866D]/20"/>
        <p className="text-red-500 text-sm">{errors.name}</p>
      </div>

      <div className="space-y-2">
        <label htmlFor="id" className="block text-sm font-medium text-gray-700">
          Identifiant
        </label>
        <input id="id" name="id" type="text" placeholder="Ex : MACH-009" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#73866D] focus:ring-2 focus:ring-[#73866D]/20"/>
        <p className="text-red-500 text-sm">{errors.id}</p>
      </div>

      <div className="space-y-2">
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          Statut
        </label>
        <select id="status" name="status" defaultValue="" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#73866D] focus:ring-2 focus:ring-[#73866D]/20"
>
          <option value="" disabled>Choisir un statut</option>
          <option value="En marche">En marche</option>
          <option value="En panne">En panne</option>
        </select>
        <p className="text-red-500 text-sm">{errors.status}</p>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#73866D] hover:bg-[#62765C] text-white px-6 py-3 rounded-xl font-medium transition"
        >
          Ajouter la machine
        </button>
      </div>
{console.log(machines)}
    </form>
    
  );
}

export default MachineForm;
