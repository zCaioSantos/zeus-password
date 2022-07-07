import Navbar from "../components/Navbar";

import Input from "../components/Input";

import { FaUserAlt, FaLock } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";



const Home = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">

            <Navbar />

            <section className="flex-1 w-full px-28 flex flex-col justify-center gap-6">
                <div className="flex flex-col items-start gap-2">
                    <h1 className="font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
                        Generate a secure password
                    </h1>
                    <p className="font-normal text-base text-white tracking-wide leading-relaxed">
                        Use your online secure password generator to create a secure password
                    </p>
                </div> 

                <form className="flex flex-col gap-2">
                    <Input placeholder="Name or E-mail" type="text" icon={<FaUserAlt color="bbbbbb" size={13} />} />
                    <Input
                        placeholder="Generated password"
                        type="text"
                        icon={<FaLock color="bbbbbb" size={13} />}
                        secondIcon={<FiCopy color="bbbbbb" className="cursor-pointer hover:stroke-white" size="20px" title="Click to copy" />}
                    />

                    <button className="max-w-[275px] h-14 p-3 rounded-xl text-base mt-4 font-bold text-black bg-white transition-all hover:bg-transparent hover:border-[0.5px] hover:border-white hover:text-white">
                        To generate
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Home;
