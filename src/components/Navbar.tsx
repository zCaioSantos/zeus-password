import { Logo } from './Logo'

const Navbar = () => {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-lg">
            <Logo />
        </header>
    )
}

export default Navbar;
