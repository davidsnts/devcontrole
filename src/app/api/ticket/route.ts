import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prismaCliente from '@/lib/prisma'

export async function PATCH(request: Request) {
     
    const session = await getServerSession(authOptions)

    if (!session || !session.user)
        return NextResponse.json({ error: "Not authorized" }, { status: 401 });

    const { id } = await request.json();

    const findTicket = await prismaCliente.ticket.findFirst({
        where: {
            id: id as string
        }
    });

    if(!findTicket)
        return NextResponse.json({error: "Faild updated ticket"}, {status: 400})

    try {
        await prismaCliente.ticket.update({
            where: {
                id: id
            },
            data:{
                status: "FECHADO"
            }
        })

        return NextResponse.json({message: "Chamado atualizado com sucesso!"})
    } catch (error) {
        throw error    
    }

}