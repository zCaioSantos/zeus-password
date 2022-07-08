import { ReactNode, useState } from "react";
import { FiCopy } from "react-icons/fi";
import PopupCopy from "../PopupCopy";

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

    const [OpenPopupCopy, setOpenPopupCopy] = useState(false)

    const copyToClipboard = async () => {

        if (!value) {
            return
        }

        setOpenPopupCopy(true)
        await navigator.clipboard.writeText(`${value}`);
        setTimeout(() => {
            setOpenPopupCopy(false)
        }, 5000);
    }

    return (
        <>
            {OpenPopupCopy && (
                <PopupCopy />
            )}
            <div className="flex items-center gap-2 border-[0.5px] py-3 px-5 h-14 rounded-xl w-full max-w-[592px] border-gray-500 transition-all hover:border-white focus-within:border-white">
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
        </>
    );
};

export default Input;
