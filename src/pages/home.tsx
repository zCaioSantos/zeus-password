import Navbar from "../components/Navbar";
import Input from "../components/Input";

import { FaUserAlt, FaLock } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <Navbar />
            <section className="flex-1 flex flex-col gap-20 w-full bg-home bg-cover p-[100px]">

                <div className="flex flex-col items-start gap-[10px]">
                    <h1 className="font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
                        Generate a secure password
                    </h1>
                    <p className="font-normal text-base text-white tracking-wide">
                        Use your online secure password generator to create a secure password
                    </p>
                </div> 

                <form className="flex flex-col gap-8">
                    <Input placeholder="Name or E-mail" type="text" icon={<FaUserAlt color="bbbbbb" size={13} />} />
                    <Input
                        placeholder="Generated password"
                        type="text"
                        icon={<FaLock color="bbbbbb" size={13} />}
                        secondIcon={<FiCopy color="bbbbbb" className="cursor-pointer" size="20px" />}
                    />
                    <button className="bg-white text-black font-bold text-base rounded-2xl max-w-[300px] p-5">
                        To generate
                    </button>
                </form>

            </section>

            <Footer />
        </div>
    );
};

export default Home;
