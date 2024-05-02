"use client";
import { Button } from "@/components/shared";
import Link from "next/link";
import { useEffect } from "react";

const GlobalError = ({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);
    return (
        <>
            <h2>FOUR O&apos;FOUR</h2>
            <p>Looks like you found something that doesn&apos;t exist!</p>
        </>
    );
};

export default GlobalError;
