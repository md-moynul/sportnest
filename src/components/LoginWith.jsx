import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const LoginWith = () => {
    const goggleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
    }
    return (
        <div>
            <Button onClick={goggleSignin} variant="outline" className={'w-full rounded-none '}><FcGoogle /> Login with Goggle</Button>
        </div>
    );
};

export default LoginWith;