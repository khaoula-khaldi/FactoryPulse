
function ContentDashborad({machines=[]}){
    const fonctionnement= machines.filter((elemnet)=>{
        return elemnet.status === "En fonctionnement"
    })
    const pannes= machines.filter((elemnet)=>{
        return elemnet.status === "En panne"
    });


   
return (
    <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">
                Production quotidienne
            </h2>
 

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500">
                    Nombre total de machines
                </p>
                <p className="text-3xl font-bold text-[#73866D] mt-3">
                    {machines.length}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                    Machines enregistrées
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500">
                    Machines opérationnelles
                </p>
                <p className="text-3xl font-bold text-[#73866D] mt-3">
                    {fonctionnement.length}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                    En fonctionnement
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500">
                    En panne
                </p>
                <p className="text-3xl font-bold text-[#CF6850] mt-3">
                    {pannes.length}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                    Intervention nécessaire
                </p>
            </div>

        </div>

     
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

            <h3 className="text-lg font-semibold text-gray-800 mb-5">
                Machines nécessitant une intervention
            </h3>

            <div className="space-y-3">
                {pannes.map((machine) => (
                    <div
                        key={machine.id}
                        className="flex items-center justify-between p-4 bg-[#F5F5F0] rounded-xl"
                    >
                        <div>
                            <p className="font-semibold text-gray-800">
                                {machine.name}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                ID : {machine.id}
                            </p>
                        </div>

                        <span className="text-sm font-medium text-[#CF6850] bg-[#CF6850]/10 px-3 py-2 rounded-lg">
                            {machine.status}
                        </span>
                    </div>
                ))}
            </div>

        </div>

    
    </div>

    
);

}
export default ContentDashborad 