import {Search} from "lucide-react";
function Header(){
    return(
        <header>
            <h1>Machines Overview</h1>            
            <p>Surveillance et gestion des machines industrielles.</p>
            <div>
                <label htmlFor="recherche"></label>
                <Search className="w-10 h-10 bg-blue-500/50" size={32} color="000000"opacity="0.31" ></Search>
                <input type="text" id="recherche"placeholder="Rechercher une machine" />
            </div>
           
        </header>
        
    )
}

export default Header