"use client";
import Link from "next/link";

type HeaderProps = {
    children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
    return (
        <header className="bg-primary py-4">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link
                        className="text-2xl font-medium text-white"
                        title="Home"
                        href="/sign-in"
                    >
                        Personalised, Identity &amp; Authentication Platform
                    </Link>

                    {children}
                </div>
            </div>
        </header>
    );
};

export default Header;
