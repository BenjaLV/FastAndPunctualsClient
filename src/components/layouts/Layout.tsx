import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    title: string;
}

const Layout = ({ children, title }: Props) => {
    return (
        <>
            <head>
                <title>{title || 'fazt&punctuals'}</title>
            </head>

            <main className='container mx-auto flex items-center h-screen justify-center p-4 md:p-24'>
                {children}
            </main>
        </>
    )
}

export default Layout