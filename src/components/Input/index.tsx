import { ReactNode } from "react";
import { FiCopy } from "react-icons/fi";

interface IInputProps {
    type: string;
    placeholder: string;
    icon?: ReactNode;
    copy: boolean;
    handOnChange?: any;
    value?: string;
    disabled?: boolean;
}

const Input = ({ type, placeholder, icon, copy, handOnChange, value, disabled }: IInputProps) => {

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(`${value}`);
    }

    return (
        <div className="flex items-center gap-2 border-[0.5px] py-3 px-5 h-14 rounded-xl max-w-[592px] border-gray-500 transition-all hover:border-white focus-within:border-white">
            {icon}
            <input
                className="flex-1 text-gray-900 bg-transparent border-none outline-none text-base"
                type={type}
                placeholder={placeholder}
                onChange={handOnChange}
                value={value}
                disabled={disabled}
            />
            {copy && (
                <FiCopy color="bbbbbb" className="cursor-pointer hover:stroke-white" size="20px" title="Click to copy" onClick={copyToClipboard} />
            )}
        </div>
    );
};

export default Input;
