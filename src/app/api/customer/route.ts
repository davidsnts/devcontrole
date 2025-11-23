import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prismaClient from "@/lib/prisma";

export async function POST(request: Request) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, email, phone, address, userId } = await request.json();

    try {
        await prismaClient.customer.create({
            data: {
                name,
                phone,
                email,
                address : address ? address : "",
                userId
            }
        })

        return NextResponse.json({"message": "cliente cadastrado com sucesso!"})
    } catch (error) {
        return NextResponse.json({ error: "Failed to create a new customer" }, { status: 401 })
    }



    return NextResponse.json({ message: "rota de cadastro" })
}