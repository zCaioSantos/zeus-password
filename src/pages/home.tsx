import PasswordGenerationForm from "../components/Form";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <section className="flex-1 w-full max-w-[1440px] mx-auto flex flex-col justify-center gap-6 animate-fadeIn px-5 sm:px-10 md:px-20 lg:px-28 xl:px-32 2xl:px-0">
                <div className="flex flex-col items-start gap-2">
                    <h1 className="font-bold whitespace-nowrap text-xl sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
                        Generate a secure password
                    </h1>
                    <p className="font-normal text-xs md:text-sm lg:text-base text-white tracking-wide">
                        Use your online secure password generator to create a secure password
                    </p>
                </div> 
                <PasswordGenerationForm />
            </section>
        </div>
    );
};

export default Home;
