import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    title: string;
}

const LayoutLoginRegister = ({ children, title }: Props) => {
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

export default LayoutLoginRegister;