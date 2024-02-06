import ContainerCustom from '../../../common/Container'
import { SignupForm } from './components'

const Login = () => {
    return (
        <div >
            <ContainerCustom className="relative">
                <SignupForm />
                <section
                    className="flex flex-col 
                items-center 
                justify-between
                max-w-5xl
                bg-gray-100
                mx-auto gap-4 p-6 
                text-gray-900
                rounded-lg 
                shadow-lg
                lg:flex-row-reverse

                  "

                >


                    <div className="flex flex-col p-4 lg:w-[100%] w-full"
                        data-aos-easing="ease-in-sine" data-aos="fade-right" data-aos-once="false"
                        data-aos-delay="50" data-aos-duration="1000"
                    >
                        <h2 className="lg:text-2xl text-2xl font-bold text-black capitalize">

                            Ricorda di scegliere il tono più adatto alle tue esigenze,

                        </h2>

                        <p className="mt-4 lg:text-lg text-sm text-black uppercase">
                            otterrai risultati sorprendenti!
                            Conformemente alla tua selezione
                            cambierà il lessico, la sintassi, le formule linguistiche,
                            l’uso della punteggiatura e la difficoltà dei quiz.

                        </p>
                        <ul>
                            <li>
                                Potrai scegliere tra 4 tipologie di tono :

                            </li>
                            <li>
                                Base = Scuola elementare

                            </li>
                            <li>
                                Comune = Scuola media

                            </li>
                            <li>
                                Avanzato = Scuola superiore

                            </li>
                            <li>
                                Specialistico = Università

                            </li>
                        </ul>
                    </div>
                </section>
            </ContainerCustom>
        </div>
    )
}

export default Login