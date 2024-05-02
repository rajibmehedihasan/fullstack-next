import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
    type?: "submit" | "reset" | "button";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    children?: ReactNode;
};

const Button = ({
    type = "button",
    onClick,
    disabled = false,
    children,
}: ButtonProps) => {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children || "Button"}
        </button>
    );
};

export default Button;
