"use client";
import { FormContainer, Button, TextInput } from "@/components/shared";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const SignIn = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, []);

    const handleOnClick = () => {
        toast.success("Hello World");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target);
        console.log(users);
    };
    return (
        <div className="p-12 shadow-[0_0_57px_0_rgba(167,167,252,0.3)] max-w-[570px] mx-auto">
            {/* {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))} */}
            <form noValidate onSubmit={handleSubmit}>
                <h2 className="text-center mb-8">Registration</h2>

                <TextInput
                    id="name"
                    labelText="Name"
                    required
                    isInvalid
                    type="text"
                />

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

                <TextInput
                    id="confirmPassword"
                    labelText="Confirm Password"
                    required
                    isInvalid
                    type="password"
                />

                <Button type="submit" fullWidth>
                    Register
                </Button>
                <div className="text-center my-4">
                    <b>OR</b>
                </div>
                <Button href="/login" fullWidth>
                    Login
                </Button>
            </form>
        </div>
    );
};

export default SignIn;
