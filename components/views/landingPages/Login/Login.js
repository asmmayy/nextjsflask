"use client"
import ContainerCustom from '../../../common/Container'
import { LoginForm } from './components'

const Login = () => {
    return (
        <div className="h-screen flex flex-col gap-[10rem]">
            <ContainerCustom className="relative">
                <LoginForm />
            </ContainerCustom>
        </div>
    )
}

export default Login