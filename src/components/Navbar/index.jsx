import Link from "next/link";
import Title from "./Title";
import UserActionButton from "./UserActionButton";
import Image from "next/image"; 

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="flex items-center font-bold text-white text-2xl">
                    <Image
                        src="/logo.png" 
                        alt="HORUS Logo"
                        width={40} 
                        height={40} 
                    />
                    <span className="ml-2">HORUS</span>
                </Link>
                <Title />
                <UserActionButton />
            </div>
        </header>
    );
};

export default Navbar;
