"use client";

import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const [isVisible, setIsVisible] = useState(false)
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);
        console.log('Form data:', userData);
        const { data, error } = await authClient.signUp.email({
            email: userData.email, 
            password: userData.password, 
            name: userData.name, 
            image: userData.image, 
        })
        console.log(data , error);
        if(data){
            toast.success('Sign up successful')
            router.push('/login')
        }
        if(error){
            toast.error(`${error.message}`)
        }
        

    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <Card className="w-full max-w-xl p-0">
                <div className="bg-cyan-600 p-5 space-y-2">
                    <h1 className="text-gray-100 text-2xl font-bold">
                        Create your SportNest account.
                    </h1>
                    <p className="text-gray-300  text-sm ">
                        Join SportNest today to automate bookings, manage schedules, and grow your community effortlessly. Set up your account in less than two minutes
                    </p>
                </div>
                <div className="p-5">

                    <Form className="flex min-w-xs flex-col gap-4 " onSubmit={onSubmit}>
                        <TextField
                            isRequired
                            name="name"
                            type="text"
                        >
                            <Label>Full Name</Label>
                            <Input className={'w-full'} placeholder="Enter your name" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="Enter your email" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            name="image"
                            type="url"
                        >
                            <Label>Image URL</Label>
                            <Input placeholder="Enter your image url" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            minLength={6}
                            name="password"
                            type={isVisible ? "text" : "password"}
                            className={'relative'}
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >

                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <span onClick={() => setIsVisible(!isVisible)} className="cursor-pointer absolute top-8 right-3">{isVisible ? <FaEye size={22} /> : <FaEyeSlash size={23} />}</span>

                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                        <div className="flex gap-3 mt-1">
                            <Button
                                type="submit"
                                className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-sm rounded-lg py-2.5 flex items-center justify-center gap-2"
                            >
                                <Check />
                                Create Account
                            </Button>
                            <Button
                                type="reset"
                                variant="secondary"
                                className="px-5 text-sm rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-cyan-400"
                            >
                                Reset
                            </Button>
                        </div>
                    </Form>
                    <div className="mt-5 text-center">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Already have an account?
                            <Link href="/login" className="text-cyan-500 font-medium hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>

            </Card>
        </div>
    );
}