"use server"

import { signIn } from "@/auth";

export async function credentialLogin(formData) {
    try {
       const response = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false
        })
        return response;
    } catch(error) {
        console.log(error);
        return error;
    }
}