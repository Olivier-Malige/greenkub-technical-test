import {useEffect, useState} from "react";
import clientAPI from "../../../hooks/clientAPI";
function Example() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | false>(false)
    const [responseTime, setResponseTime] = useState<number | null>(null);

    const usePing = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        setError(false);
        setResponseTime(null);

        const executedTime = Date.now();
        const response = await clientAPI.example.ping();
        if (response.success) {
            setResponseTime(response.data.pong - executedTime);
        } else {
            setError(response.error);
        }
        setLoading(false);
    }

    useEffect(() => {
        usePing();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return <div>Server responded in : {responseTime} millisecond{responseTime! > 1 ? 's' : ''}</div>
}

export default Example;