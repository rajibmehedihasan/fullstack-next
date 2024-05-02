"use client";
import { FormContainer, Button, TextInput } from "@/components/shared";
import { toast } from "react-toastify";

const SignIn = () => {
    const handleOnClick = () => {
        toast.success("Hello World");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target);
    };
    return (
        <div className="p-12 shadow-[0_0_57px_0_rgba(167,167,252,0.3)] max-w-[570px] mx-auto">
            <form noValidate onSubmit={handleSubmit}>
                <h2 className="text-center mb-8">Login</h2>

                <TextInput
                    id="email"
                    labelText="Email"
                    required
                    isInvalid
                    type="email"
                    errorMessage="Enter a valid email address"
                />
                <TextInput
                    id="password"
                    labelText="Password"
                    required
                    isInvalid
                    type="password"
                />
                <Button type="submit">Login</Button>
                <div className="text-center">
                    <b>OR</b>
                </div>
                <Button onClick={handleOnClick}>SAML Login</Button>
            </form>
        </div>
    );
};

export default SignIn;
