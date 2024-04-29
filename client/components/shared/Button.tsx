type Props = {
    type?: "submit" | "reset" | "button" | undefined;
};

const Button = ({ type }: Props) => {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type={type || "button"}
        >
            Button
        </button>
    );
};

export default Button;
