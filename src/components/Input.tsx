import { ReactNode } from "react";

interface IInputProps {
    type: string;
    placeholder: string;
    icon?: ReactNode;
    secondIcon?: ReactNode;
}

const Input = ({ type, placeholder, icon, secondIcon }: IInputProps) => {
    return (
        <div className="flex items-center gap-2 border-[0.5px] py-3 px-5 h-14 rounded-xl max-w-[592px] border-gray-500 transition-all hover:border-white focus-within:border-white">
            {icon}
            <input
                className="flex-1 text-gray-900 bg-transparent border-none outline-none text-base"
                type={type}
                placeholder={placeholder}
            />
            {secondIcon}
        </div>
    );
};

export default Input;
