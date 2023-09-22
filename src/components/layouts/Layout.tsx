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

            <main>
                {children}
            </main>
        </>
    )
}

export default Layout