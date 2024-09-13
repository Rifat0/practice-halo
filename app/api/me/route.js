import { auth } from "@/auth";
import { loginUserData } from "@/lib/getData";

import { NextResponse } from "next/server";

export const GET = async (request) => {
    const session = await auth();

    if (!session?.accessToken) {
        return new NextResponse(`You are not authenticated!`, {
            status: 401,
        });
    }

    try {
        const user = await loginUserData();

        return new NextResponse(JSON.stringify(user), {
            status: 200,
        });

    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
          });
    }
}