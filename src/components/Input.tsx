import { ReactNode } from "react";

interface IInputProps {
    type: string;
    placeholder: string;
    icon?: ReactNode;
    secondIcon?: ReactNode;
}

const Input = ( { type, placeholder, icon, secondIcon }:IInputProps ) => {
    return (
        <div className="flex items-center gap-[10px] border-[0.5px] p-5 rounded-2xl max-w-[600px] border-white">
            { icon }
            <input
                className="bg-transparent border-none outline-none flex-1 text-gray-900 h-full placeholder:text-base text-gray-900"
                type={type}
                placeholder={placeholder}
            />
            { secondIcon }
        </div>
    );
};

export default Input;
