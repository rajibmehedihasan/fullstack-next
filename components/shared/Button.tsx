import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
    type?: "submit" | "reset" | "button";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
    href?: string;
};

const Button = ({
    type = "button",
    onClick,
    disabled = false,
    children,
    fullWidth,
    href,
}: ButtonProps) => {
    return !href ? (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                fullWidth ? "w-full" : ""
            }`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children || "Button"}
        </button>
    ) : (
        <Link
            className={`bg-blue-500 inline-block text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                fullWidth ? "w-full" : ""
            }`}
            href={href}
        >
            {children || "Button"}
        </Link>
    );
};

// {
//     !href ? (

//     ) : (
//         <button
//             className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
//                 fullWidth ? "w-full" : ""
//             }`}
//             type={type}
//             onClick={onClick}
//             disabled={disabled}
//         >
//             {children || "Button"}
//         </button>
//     );
// }

export default Button;
