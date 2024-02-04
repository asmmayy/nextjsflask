import ChatBotIcon from "@/components/common/ChatBotIcon";
import { ICONS } from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const socials = [
        {
            icon: ICONS.email_icon,
            link: "mailto:fastschoolitalia@gmail.com",
        },
        {
            icon: ICONS.fb_icon,
            link: "https://www.facebook.com/profile.php?id=61555669611895"
        },
        {
            icon: ICONS.insta_icon,
            link: "https://www.instagram.com/fastschool_srl?igsh=ZnlzZnd0dmV1cmJ0&utm_source=qr"
        },
        {
            icon: ICONS.twitter_icon,
            link: "https://twitter.com/Fastschool_srl"
        },
        {
            icon: ICONS.tiktok_icon,
            link: "https://www.tiktok.com/@fastschoolitalia"
        }
    ]

    return (
        <footer className="p-4 mt-20 ">
            {/* <ChatBotIcon /> */}
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800">FastSchool S.R.L</p>
                    <p className="text-sm text-gray-600">p.iva 02173860764</p>
                    <p className="text-sm text-gray-600">Sede legale Tolve(PZ) Vico 3º Vignali delle Corte 15</p>
                </div>
                <div className="flex gap-4">
                    {
                        socials.map((social, idx) => {
                            return (
                                <Link 
                                    href={social.link} 
                                    key={idx} 
                                    target={social.link.includes("mailto") ? "_self" : "_blank"}
                                >
                                    <Image 
                                        src={social.icon}
                                        alt="social icon"
                                        width={30}
                                        height={30}
                                        className="cursor-pointer opacity-50 hover:opacity-100 transition duration-200 ease-in-out"
                                    />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            {/* justify-center */}
            <div className="mt-4 flex ">
                <Link href="/assets/Docs/Termini-e-Condizioni-Sito-Web-o-App.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">Terms and Conditions</Link>
                <Link href="/assets/Docs/Privacy-Policy-sul-Trattamento-dei-Dati.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Privacy</Link>
            </div>
        </footer>
    );
}

export default Footer;
