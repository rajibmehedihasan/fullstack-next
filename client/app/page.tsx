"use client";
import { Button } from "@/components/shared";
import { useEffect, useState } from "react";

export default function Home() {
    const [mgs, setMessage] = useState("");

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch("/api/example", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ key: "value" }), // Replace with your request body
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const { message } = await response.json();
                console.log(message);
                setMessage(message);
                // alert(message);
            };

            fetchData();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Button />
            <h1 className="text-black">h1: {mgs}</h1>
        </main>
    );
}
