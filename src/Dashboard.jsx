
import { useState, useEffect } from "react";
import ContentDashboard from "./components/ContentDashboard";

async function fetchMachines() {
    const res = await fetch("/machines.json");

    if (!res.ok) {
        throw new Error(`Erreur HTTP ${res.status}`);
    }

    const data = await res.json();
    return data;
}

function Dashboard() {
    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadMachines() {
            try {
                const data = await fetchMachines();
                setMachines(data);
            } catch (error) {
                setError(error.message);
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        loadMachines();
    }, []);

    if (loading) {
        return <p>Chargement...</p>;
    }

    if (error) {
        return <p>Erreur : {error}</p>;
    }

    return (
        <ContentDashboard machines={machines} />
    );
}

export default Dashboard;
