import { type ForwardedRef, forwardRef, type InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    labelText?: string;
    required?: boolean;
    isInvalid?: boolean;
    errorMessage?: string;
    placeholder?: string;
}

const TextInput = (
    {
        id,
        labelText,
        required,
        isInvalid,
        type,
        errorMessage,
        placeholder,
        ...rest
    }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>
) => {
    return (
        <div className="mb-4">
            {labelText && (
                <label className="mb-2" htmlFor={id}>
                    {labelText}
                    {required && <span className="text-[#dc3545]">*</span>}
                </label>
            )}

            <input
                {...rest}
                id={id}
                ref={ref}
                name={id}
                // className={`form-control mb-0 ${isInvalid ? "is-invalid" : ""}`}
                className="border text-[#777] min-h-[50px] mb-[30px] px-5 py-3 rounded-[3px] border-solid border-[#d8d8d8]"
                type={type ? type.toLowerCase() : "text"}
                placeholder={
                    placeholder ??
                    (!placeholder &&
                        labelText &&
                        `Enter ${labelText.toLowerCase()}`)
                }
                required={required}
                autoComplete="off"
            />
            {isInvalid && (
                <div className="invalid-feedback">
                    {errorMessage ?? "Invalid Value"}
                </div>
            )}
        </div>
    );
};

export default forwardRef<HTMLInputElement, TextInputProps>(TextInput);
