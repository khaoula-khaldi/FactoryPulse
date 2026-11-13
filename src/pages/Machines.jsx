import { useOutletContext } from "react-router-dom";
import MachinesSection from "../components/MachinesSection";
function Machines(){
    const { machines } = useOutletContext();
    // console.log("AddMachine:", machines);
    return(
        <MachinesSection machines={machines} />  
    )
}
export default Machines