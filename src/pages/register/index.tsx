import React from 'react'
import MainCard from '@/components/common/MainCard'
import FormRegister from '@/components/ui/FormRegister'
import LayoutLoginRegister from '@/components/layouts/LayoutLoginRegister'

const Register = () => {
  return (
    <LayoutLoginRegister title='register'>
        <MainCard text='Creá tu cuenta' textColor='text-primary'>
            <FormRegister />
        </MainCard>
    </LayoutLoginRegister>
  )
}

export default Register