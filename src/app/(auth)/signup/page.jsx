"use client";

import { Check } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm px-10 py-10">

                {/* Logo */}
                <div className="flex items-center gap-2 mb-6">
                    <Image src="/assets/logo.png" alt="SportNest" width={30} height={30} />
                    <span className="text-cyan-500 font-semibold text-lg"><span className=" text-sky-600">Sport</span><span className="text-teal-600">Nest</span></span>
                </div>

                {/* Heading */}
                <h1 className="text-gray-800 dark:text-gray-100 text-2xl font-bold">
                    Join SportNest
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-8">
                    Create your account and start booking your favorite sports facilities today.
                </p>

                {/* Form */}
                <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>

                    {/* Name */}
                    <TextField isRequired name="fullName" type="text" className="w-full">
                        <Label className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            Name
                        </Label>
                        <Input
                            placeholder="Enter your full name"
                            className="mt-1 w-full border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 placeholder-gray-400"
                        />
                        <FieldError className="text-red-500 text-xs mt-1" />
                    </TextField>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="w-full"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            Email Address
                        </Label>
                        <Input
                            placeholder="Enter your email"
                            className="mt-1 w-full border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 placeholder-gray-400"
                        />
                        <FieldError className="text-red-500 text-xs mt-1" />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="w-full"
                        validate={(value) => {
                            if (value.length < 8)
                                return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value))
                                return "Must contain at least one uppercase letter";
                            if (!/[0-9]/.test(value))
                                return "Must contain at least one number";
                            return null;
                        }}
                    >
                        <Label className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            Password
                        </Label>
                        <div className="relative mt-1">
                            <Input
                                placeholder="Create a password"
                                className="w-full border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 placeholder-gray-400 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-500"
                            >
                                {showPassword ? <EyeOffIcon size={15} /> : <EyeIcon size={15} />}
                            </button>
                        </div>
                        <Description className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                            Min 8 characters, 1 uppercase letter, and 1 number
                        </Description>
                        <FieldError className="text-red-500 text-xs mt-1" />
                    </TextField>

                  

                    {/* Buttons */}
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

                <div className="border-t border-gray-100 dark:border-gray-700 mt-7 pt-5 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Already have an account?
                        <Link href="/login" className="text-cyan-500 font-medium hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}