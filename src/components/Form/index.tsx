import { FormEvent, useState } from "react";
import Input from "../Input";
import { FaUserAlt, FaLock } from "react-icons/fa";

const PasswordGenerationForm = () => {

    const [nameOrEmail, setNameOrEmail] = useState("");
    const [password, setPassword] = useState("")

    const handOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameOrEmail(e.target.value);
    };

    const generatePassword = (e: FormEvent) => {
        e.preventDefault()

        if (nameOrEmail === "") {
            setPassword("")
            return
        }
    
        const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        const teclado =  ["S","N","V","F","R","G","H","J","O","K","L","A","Z","M","P","Q","W","T","D","Y","I","B","E","C","U","X"];

        let aux = "";
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < alfabeto.length; j++) {
                if (nameOrEmail[i].toUpperCase() === alfabeto[j].toUpperCase()){
                    aux += (nameOrEmail[i].toLowerCase() + teclado[j].toLowerCase());
                }
            }
        }

        aux += `@${new Date().getFullYear()}!`
        setPassword(aux[0].toUpperCase() + aux.slice(1))
    }

    return (
        <form onSubmit={generatePassword} className="w-full flex flex-col gap-2">

            <Input placeholder="Name or E-mail" type="text" copy={false} handOnChange={handOnChange} icon={<FaUserAlt color="bbbbbb" size={13} />} />

            <Input
                placeholder="Generated password"
                type="text"
                icon={<FaLock color="bbbbbb" size={13} />}
                value={password}
                copy
                disabled
            />

            <button type="submit" className="w-full max-w-full sm:max-w-[275px] h-14 p-3 rounded-xl text-base mt-4 font-bold text-black bg-white transition-all hover:bg-transparent hover:border-[0.5px] hover:border-white hover:text-white">
                To generate
            </button>

        </form> 
    )
}

export default PasswordGenerationForm;