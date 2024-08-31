import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { welcomeFormAtom } from "@/store/welcome-form-store";
import { useAtom } from "jotai";
import { ChangeEvent } from "react";
import Image from "next/image";
import type { ButtonGroupType } from '../types'
import { ButtonGroup } from "../button-group";


const Step01: React.FC = () => {
    const [welcomeFormState, setWelcomeFormState] = useAtom(welcomeFormAtom)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Expressão regular para aceitar apenas letras (maiúsculas e minúsculas) e espaços
        const textRegex = /^[a-zA-Z\s]*$/;

        if (textRegex.test(value)) {
            setWelcomeFormState(prev => {
                return { ...prev, companyName: value, error: '' }
            })
        } else {
            setWelcomeFormState(prev => {
                return { ...prev, companyName: value, error: 'Type error' }
            })
        }
    };

    return <div className="flex min-w-[400px] flex-col gap-4 py-5">
        <h3 className="text-2xl font-medium">Let's start </h3>
        <Label htmlFor="name" className="text-left">
            What is your company name?
        </Label>
        <Input type="text"   id="name" onChange={handleInputChange}
            value={welcomeFormState.companyName} />
        <small className="text-red-600">{welcomeFormState.error}</small>
    </div>
}


const Step02: React.FC = () => {
    const options: ButtonGroupType[] = [
        { label: '0 - 10', value: '0-10' },
        { label: '10 - 50', value: '10-50' },
        { label: '50 - 100', value: '50-100' },
        { label: '100 - 500', value: '100-500' },
        { label: '500 - 1000', value: '500-1000' },
    ]
    return <div className="flex min-w-[400px] flex-col gap-4 py-5">
        <h3 className="text-2xl font-medium">Almost done </h3>
        <Label htmlFor="company-size" className="text-left">
            Whats your company size?
        </Label>
        <input type="text" id="company-size" />
        <ButtonGroup options={options} />
    </div>
}


const Step03: React.FC = () => {
    return (
        <div className="flex min-w-[400px] flex-col gap-5 p-5">
            <h3 className="text-2xl font-medium">You're good to go 🎉🎉</h3>
            <AspectRatio ratio={16 / 10}>
                <Image src="/dancing.gif" fill alt="Image" className="rounded-md object-cover" />
            </AspectRatio>
            <label>Press next and start collecting feedbacks 🥳🥳</label>
        </div>
    )
}


export { Step01, Step02, Step03 }