import apiClient from "../api/apiClient";

export default function OrderInfo() {

    const handleSelect = async () => {
        try {
            const response = await apiClient.get();
        } catch (error) {

        }
    };
    return (
        <div>
        </div>
    )

};
