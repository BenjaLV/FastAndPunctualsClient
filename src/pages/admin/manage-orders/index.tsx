import MainCard from '@/components/common/MainCard'
import Layout from '@/components/layouts/Layout'
import React from 'react'
import { Avatar } from '@nextui-org/react'
import DateSlider from '@/components/ui/DateSlider';

interface Props {
    user: string;
    packages: string;
    deliveryman: string;
    image?: string;
}

const ManageOrders = ({ user, image, packages, deliveryman }: Props) => {
    return (
        <Layout title='manage-orders'>
            <MainCard text='Gestionar pedidos' backHref='/manage-orders' className='w-full'>
                <div className='flex items-center'>
                    <Avatar src={image} name={user} className='bg-alternative w-14 h-14 top-4 left-4' />
                    <div className='ml-8'>
                        <h1 className='font-bold text-textColor'>Hola Admin{user}!</h1>
                        <h3 className='text-xs text-textColor'>Estos son los pedidos del día</h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <DateSlider />
                </div>
            </MainCard>
        </Layout>
    )
}

export default ManageOrders