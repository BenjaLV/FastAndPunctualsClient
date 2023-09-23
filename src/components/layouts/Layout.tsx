import React, { ReactNode } from 'react'
import Navbar from '../ui/Navbar';

interface Props {
    children: ReactNode;
    title: string;
    className?: string;
}

const Layout = ({ children, title, className }: Props) => {
    return (
        <>
            <title>{title || 'fazt&punctuals'}</title>

            <Navbar></Navbar>
            <main className={`${className} container mx-auto flex items-center h-screen justify-center p-4 md:p-24`}>
                {children}
            </main>
        </>
    )
}

export default Layout