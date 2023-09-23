import React from 'react'
import MainCard from '@/components/common/MainCard'
import FormRegister from '@/components/ui/FormRegister'
import Layout from '@/components/layouts/Layout'

const Register = () => {
  return (
    <Layout title='register'>
        <MainCard text='Creá tu cuenta' className='text-primary'>
            <FormRegister />
        </MainCard>
    </Layout>
  )
}

export default Register