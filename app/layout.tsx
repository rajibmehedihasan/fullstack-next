import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import ToastProvider from "@/lib/react-toastify/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Personalised, Identity & Authentication Platform",
    description:
        "An application for personalisation, indentification and authentication management.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <Header />
                <ToastProvider>
                    <main className="container py-20">{children}</main>
                </ToastProvider>
            </body>
        </html>
    );
}
