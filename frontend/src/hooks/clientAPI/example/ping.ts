import axios from "axios";

export default async function (): Promise<{
    success: true,
    data: {pong: number}
} | { success: false, error: string }> {
    try {
        const response = await axios.get<{pong: number}>("http://localhost:8000/api/ping");
        return {
            success: true,
            data: response.data,
        }
    } catch (error: unknown) {
        if (!axios.isAxiosError(error) || !error.response) {
            return {
                success: false,
                error: "Unknown error"
            }
        }
        return {
            success: false,
            error: `Request ended with status ${error.response.status} : ${error.response.data}`,
        }
    }
}