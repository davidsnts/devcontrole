import Container from '@/components/container'
import Link from 'next/link'
import React from 'react'

const DashboardHeader = () => {
  return (
    <Container> 
        <header className='w-full bg-gray-900 my-4 p-3 rounded flex gap-4 text-white items-center'>
            <Link className='hover:font-bold duration-300' href={'/dashboard'}>
                Chamados
            </Link>
            <Link className='hover:font-bold duration-300' href={'/dashboard/customer'}>
                Clientes
            </Link>
        </header>
    </Container>
  )
}

export default DashboardHeader