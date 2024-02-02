import ContainerCustom from '../../../common/Container'
import { SignupForm } from './components'

const Login = () => {
    return (
        <div className="h-screen flex flex-col gap-[10rem]">
            <ContainerCustom className="relative">
                <SignupForm />
            </ContainerCustom>
        </div>
    )
}

export default Login