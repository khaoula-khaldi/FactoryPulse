import { useOutletContext } from "react-router-dom";
import ContentDashborad from "../components/ContentDashboard";
function Home(){
    const { machines } = useOutletContext();
    return(
        <ContentDashborad machines={machines} />  
    )
}
export default Home