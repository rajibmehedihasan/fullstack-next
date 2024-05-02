import Link from "next/link";
import { forwardRef, type FormEvent, type ReactNode, useRef } from "react";

interface Props {
    method?: string;
    submitButtonText?: string;
    submitAction: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    children: ReactNode;
    noValidate?: boolean;
    loading?: boolean;
    customClass?: string;
    backUrl?: string;
    submitBtnSm?: boolean;
    onFormCancel?: () => void;
}

const FormContainer = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
    const {
        method,
        submitAction,
        submitButtonText,
        noValidate = true,
        customClass,
        loading,
        backUrl,
        submitBtnSm,
        onFormCancel,
    } = props;
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (scrollRef.current) {
            window.scrollTo({
                top: scrollRef.current.offsetTop,
                behavior: "smooth",
            });
        }

        submitAction(e);
    };

    return (
        <div
            className={`position-relative ${customClass ?? ""}`}
            ref={scrollRef}
        >
            {backUrl && (
                <Link className="btn btn-outline-primary mb-4" href={backUrl}>
                    Back
                </Link>
            )}
            <form
                method={method || "POST"}
                noValidate={noValidate ?? false}
                onSubmit={handleSubmit}
            >
                {props.children}

                <button
                    type="submit"
                    className={`btn btn-primary px-3 fw-semibold ${
                        !submitBtnSm ? "btn-lg mt-4" : ""
                    }`}
                    disabled={loading}
                >
                    {submitButtonText ?? "Submit"}
                </button>

                {onFormCancel && (
                    <div
                        className={`btn btn-primary px-3 fw-semibold ml-4 ${
                            !submitBtnSm ? "btn-lg mt-4" : ""
                        }`}
                        onClick={onFormCancel}
                    >
                        Cancel
                    </div>
                )}
            </form>
        </div>
    );
});

FormContainer.displayName = "FormContainer";

export default FormContainer;
