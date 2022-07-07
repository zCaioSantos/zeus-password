import PasswordGenerationForm from "../components/Form";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <section className="flex-1 w-full max-w-[1440px] mx-auto flex flex-col justify-center gap-6 animate-fadeIn">
                <div className="flex flex-col items-start gap-2">
                    <h1 className="font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
                        Generate a secure password
                    </h1>
                    <p className="font-normal text-base text-white tracking-wide">
                        Use your online secure password generator to create a secure password
                    </p>
                </div> 
                <PasswordGenerationForm />
            </section>
        </div>
    );
};

export default Home;
