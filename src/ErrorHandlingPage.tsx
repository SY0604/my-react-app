import React, { useState } from "react";

const ErrorHandlingPage: React.FC = () => {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Function to fetch data
    const fetchData = () => {
        setLoading(true); // Start loading
        setError(null); // Clear previous errors

        fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data. Endpoint not found.");
                }
                return response.json();
            })
            .then((data) => {
                setData(JSON.stringify(data)); // Set the fetched data
                setLoading(false); // Stop loading
            })
            .catch((error) => {
                setError(error.message); // Set error message
                setLoading(false); // Stop loading
            });
    };

    return (
        <div className="container">
            <h1>Handle API Errors Gracefully</h1>

            {/* Show loading spinner */}
            {loading && <div className="spinner">Loading...</div>}

            {/* Show error message */}
            {error && (
                <div style={{ color: "red", marginBottom: "20px" }}>
                    <strong>Error:</strong> {error}
                </div>
            )}

            {/* Show retry button if there's an error */}
            {error && (
                <button
                    onClick={fetchData}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Retry
                </button>
            )}

            {/* Show fetched data */}
            {data && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        backgroundColor: "#f9f9f9",
                    }}
                >
                    <strong>Data:</strong> {data}
                </div>
            )}

            {/* Button to manually fetch data */}
            {!loading && !data && !error && (
                <button
                    onClick={fetchData}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Fetch Data
                </button>
            )}
        </div>
    );
};

export default ErrorHandlingPage;
