"use client"
import { api } from '@/lib/api';
import { CustomerProps } from '@/utils/customer.type';
import { TicketProps } from '@/utils/ticket.type'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FiCheckSquare, FiFile, FiTrash2 } from 'react-icons/fi'

interface TicketItemProps {
    ticket: TicketProps;
    customer: CustomerProps | null
}

const TicketItem = ({ customer, ticket }: TicketItemProps) => {

    const router = useRouter();

    async function handleChangeStatus() {
        try {
            const response = await api.patch("/api/ticket", {
                id: ticket.id
            })

            router.refresh();
        } catch (error) {
            throw error
        }
    }
    return (
        <>
            <tr className='border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100 hover:bg-gray-200 duration-300'>
                <td className='text-left pl-1'> {customer?.name}</td>
                <td className='text-left hidden sm:table-cell' > {ticket?.createdAt?.toLocaleDateString("pt-br")}</td>
                <td className='text-left'>
                    <span className='bg-green-500 px-2 py-1 rounded text-white'> {ticket?.status} </span>
                </td>
                <td className='text-left'>
                    <button>
                        <FiCheckSquare onClick={handleChangeStatus} size={24} className='mr-4' color='#131313' />
                    </button>
                    <button>
                        <FiFile size={24} color='#3b82f6' />
                    </button>
                </td>
            </tr>
        </>
    )
}

export default TicketItem