import Image from "next/image";
import agência from '/public/img/agência.png';
import Link from "next/link";

export default function Header(){
    return(
        <header className="flex items-center justify-between border-b-2 border-b-[#AFAFAF] py-4 px-8 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center w-1/3">
                <Image src={agência} alt="Agência" width={150} height={50} />
            </div>

            <nav className=" items-center justify-center w-1/3">
                <ul className="flex flex-row items-center justify-between w-full">
                    <li className="font-bold text-white">
                        <Link href="#">Home</Link>
                    </li>
                    <li className="font-bold text-white">
                        <Link href="#">O que fazemos</Link>
                    </li>
                    <li className="font-bold text-white">
                        <Link href="#">Cases</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center justify-end w-1/3">
                <button className="flex items-center justify-center bg-[#0DC74F]
                 border-2 border-green-800 hover:bg-green-400 h-8 lg:h-12 rounded-lg px-4 lg:px-6">
                    Fale conosco
                </button>
            </div>
        </header>
    );
}
