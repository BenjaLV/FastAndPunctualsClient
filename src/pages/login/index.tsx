import Layout from '@/components/layouts/Layout'
import FormLogin from '@/components/ui/FormLogin'
import Button from '@/components/ui/Button'

import React from 'react'

const Login = () => {
    return (
        <Layout title='Login'>
            <FormLogin>
                <div className="mb-4">
                    <Button
                        text="Crear cuenta"
                        className="bg-inherit	text-white border border-secondary"
                    ></Button>
                </div>
            </FormLogin>
        </Layout>
    )
}

export default Login