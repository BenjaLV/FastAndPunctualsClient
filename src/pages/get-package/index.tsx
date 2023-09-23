import React from 'react'
import Layout from '@/components/layouts/Layout'
import MainCard from '@/components/common/MainCard'
import GetPackageCard from '@/components/common/GetPackageCard'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const GetPackage = () => {
    return (
        <Layout title='get-package'>
            <div className='flex flex-col'>
                <MainCard text='Obtener paquetes' textColor='text-primary'>
                    <div>
                        <div className="border-dotted border-b border-gray-400 ">
                            <a
                                className="my-2 text-textColor hover:underline flex flex-col items-center text-center text-xs"
                                href="/login"
                            >
                                ¿Cuántos paquetes repartirás hoy?
                            </a>
                        </div>

                        <div className="mt-3 p-8">
                            <div className="flex flex-col">
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                                <GetPackageCard text="Amenabar 6463, CABA" />
                            </div>
                        </div>
                    </div>
                </MainCard>

                <div className='mt-0.5 p-8'>
                    <Link href="/delivery" legacyBehavior>
                        <Button
                            text="Iniciar jornada"
                            className="bg-secondary text-primary text-sm"
                        />
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default GetPackage
