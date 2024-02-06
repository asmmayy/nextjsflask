import { LOGOS } from "@/shared/constants";
// console.log(LOGOS.fastSchool_logo_black,"hell")
import Image from "next/image";
import { IMAGES } from "@/shared/constants";


const UsageGuide = () => {
    return (
        <div className="flex flex-col justify-center items-center sm:gap-[7rem] gap-[4rem]">
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
                    <h1 className="lg:text-4xl text-2xl font-bold text-black capitalize">
                        Consigli

                    </h1>
                    <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                        Usa FastSchool per :

                    </div>

                    <div className="py-3 text-sm flex flex-wrap">
                        <div className="flex justify-start cursor-cross-hair
                                         text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div className="flex-grow font-medium px-2 capitalize">creare verifiche</div>
                        </div>
                        <div className="flex justify-start cursor-cross-hair text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div className="flex-grow font-medium px-2 capitalize">creare lezioni per la tua classe</div>
                        </div>
                        <div className="flex justify-start cursor-cross-hair text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span className="bg-green-400  h-2 w-2 m-2 rounded-full"></span>
                            <div className="flex-grow font-medium px-2 capitalize">
                                studiare lunghi manuali, libri o corsi

                            </div>
                        </div>
                        <div className="flex justify-start cursor-cross-hair text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span className="bg-green-400  h-2 w-2 m-2 rounded-full"></span>
                            <div className="flex-grow font-medium px-2 capitalize">
                                semplificare il tuo erasmus in Italia

                            </div>
                        </div>
                        <div className="flex justify-start cursor-cross-hair text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div className="flex-grow font-medium px-2 capitalize">
                                qualificare velocemente il personale aziendale

                            </div>
                        </div>
                        <div className="flex justify-start cursor-cross-hair text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div className="flex-grow font-medium px-2 capitalize">
                                creare contenuti di qualità per il tuo busines


                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section
                className="flex lg:flex-row flex-col 
                items-center 
                justify-between
                max-w-5xl
                bg-gray-100
                mx-auto gap-4 p-6 
                text-gray-900
                rounded-lg 
                shadow-lg
                  "
            >
                <div className="lg:w-[40%] w-[90%] max-w-[20rem] min-h-[15rem] border border-gray-400 rounded-md">
                    <Image alt="" src={IMAGES.fastschoolPic} width="100%" />
                </div>
                <div className="flex flex-col p-4 lg:w-[70%] w-full"
                    data-aos-delay="50" data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    data-aos="flip-down" data-aos-once="false"
                >
                    <h1 className="lg:text-4xl text-2xl font-bold text-center text-black capitalize">
                        Come usare FastSchool
                    </h1>
                    <p className="mt-4 lg:text-lg text-sm text-center text-black uppercase ">

                        Inserisci il contenuto scelto nell'apposito spazio,
                        attendi qualche secondo ed il gioco è fatto.
                        Puoi ripetere l'operazione infinite volte
                        e solo quando sarai soddisfatto del risultato,
                        salva e scarica le tua lezione.
                    </p>
                </div>
            </section>
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
                <div className="lg:w-[40%] w-[90%] min-h-[15rem] border border-gray-400 rounded-md">
                    {/* <img className="main-img" src="https://enlightio.com/wp-content/uploads/2022/06/why-are-lesson-plans-important-for-teachers.jpg"width="100%" /> */}
                    <Image alt="" className="main-img" src={IMAGES.fastschoolPic2} width="100%" />

                </div>
                <div className="flex flex-col p-4 lg:w-[70%] w-full"
                    data-aos-easing="ease-in-sine" data-aos="fade-right" data-aos-once="false"
                    data-aos-delay="50" data-aos-duration="1000"
                >
                    <h1 className="lg:text-4xl text-2xl font-bold text-center text-black capitalize">
                        Cosa fa FastSchool

                    </h1>
                    <p className="mt-4 lg:text-lg text-sm text-center text-black uppercase">
                        {/* L’intelligenza artificiale entra in empatia con un insegnante.
                        In pochi secondi avrai a tua disposizione un elaborato sull'argomento prescelto, una serie di quiz suddivisi in categorie, uno schema per semplificare lo studio e diversi consigli per creare fantastiche attività didattiche. */}
                        Riduce il carico di lavoro e fa risparmiare tempo prezioso.
                        In pochi secondi avrai a tua disposizione un elaborato
                        per studiare o spiegare l'argomento scelto,
                        numerosi quiz per allenarti, un outline con i punti salienti
                        ed uno schema riassuntivo
                    </p>
                </div>
            </section>


        </div>
    )
}

export default UsageGuide;