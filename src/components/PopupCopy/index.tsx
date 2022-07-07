import { FaCheck } from "react-icons/fa";

const PopupCopy = () => {
    return (
        <div className="absolute top-0 left-0 z-10 w-full py-5 flex items-center gap-2 justify-center bg-gradient-to-r from-cyan-500 to-pink-500 bg-opacity-20 backdrop-blur-lg animate-Popup">
            <FaCheck color="white" />
            <h1 className="font-light text-white tracking-wide">
                Copied to clipboard!
            </h1>
        </div>
    );
};

export default PopupCopy;
