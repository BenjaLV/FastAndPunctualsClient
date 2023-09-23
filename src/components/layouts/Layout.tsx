import React, { ReactNode } from 'react'
import Navbar from '../ui/Navbar';

interface Props {
    children: ReactNode;
    title: string;
}

const Layout = ({ children, title }: Props) => {
    return (
        <>
            <title>{title || 'fazt&punctuals'}</title>
            
            <Navbar></Navbar>
            <main className='container mx-auto flex items-center h-screen justify-center p-4 md:p-24'>
                {children}
            </main>
        </>
    )
}

export default Layout