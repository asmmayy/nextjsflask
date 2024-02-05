import { LOGOS } from "@/shared/constants";
// console.log(LOGOS.fastSchool_logo_black,"hell")
import Image from "next/image";
import { IMAGES } from "@/shared/constants";


const UsageGuide = () => {
    return (
        <div className="flex flex-col justify-center items-center sm:gap-[7rem] gap-[4rem]">
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
                {/* shadow-slate-600 */}
                {/* border-gray-300  */}
                {/* rounded-2xl border */}
                <div className="lg:w-[40%] w-[90%] max-w-[20rem] min-h-[15rem] border border-gray-400 rounded-md">
                    <Image alt="" src={IMAGES.fastschoolPic} width="100%" />
                </div>
                <div className="flex flex-col p-4 lg:w-[70%] w-full"
                    data-aos-delay="50" data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    data-aos="flip-down" data-aos-once="false"
                >
                    <h1 className="lg:text-4xl text-2xl font-bold text-center text-black capitalize">
                        {/* Come utilizzare FastSchool */}
                        Come usare FastSchool

                    </h1>
                    <p className="mt-4 lg:text-lg text-sm text-center text-black uppercase ">
                        {/* Facile e veloce. Per utilizzare FastSchool AI tutto quello che devi fare è incollare l'URL del contenuto scelto nell'apposito spazio, attendere qualche secondo e il gioco è fatto. Puoi ripetere l'operazione più e più volte e una volta che sei soddisfatto del risultato, salva e scarica le tue lezioni. */}
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
                        numerosi quiz per allenarti, un outline con i punti sali
                    </p>
                </div>
            </section>
        </div>
    )
}

export default UsageGuide;