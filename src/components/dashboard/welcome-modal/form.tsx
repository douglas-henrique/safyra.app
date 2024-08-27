'use client'
import { useEffect, useState } from "react";
import { Step } from "./step";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { welcomeFormAtom } from '@/store/welcome-form-store'
import { useAtom } from "jotai";

interface ButtonGroupType { label: string, value: string }
interface WelcomeModalFormProps {
    closeModal: () => void
}

const ButtonGroup: React.FC<{ options: ButtonGroupType[] }> = ({ options }) => {
    const [welcomeFormState, setWelcomeFormState] = useAtom(welcomeFormAtom)

    const activeCSS = 'flex items-center font-bold justify-center border rounded-md p-3 bg-black text-white hover:bg-white hover:font-medium  hover:text-black transition-all ease-linear hover:cursor-pointer'
    const inactiveCSS = 'flex items-center justify-center border rounded-md p-3 hover:bg-black hover:text-white transition-all ease-linear hover:cursor-pointer'
    return options.map((element, index) => <button key={index} onClick={() => {
        setWelcomeFormState((lastWelcomeFormState) => {
            return { ...lastWelcomeFormState, companySize: element.value }
        })
    }} className={element.value === welcomeFormState.companySize ? activeCSS : inactiveCSS}>
        <span className=" hover:cursor-pointer"></span>
        <label className="hover:cursor-pointer">{element.label}</label>
    </button>)
}

const Step01: React.FC = () => {
    const [welcomeFormState, setWelcomeFormState] = useAtom(welcomeFormAtom)
    const [text, setText] = useState('')
    return <div className="flex min-w-[400px] flex-col gap-4 py-5">
        <h3 className="text-2xl font-medium">Let's start </h3>
        <Label htmlFor="name" className="text-left">
            What is your company name?
        </Label>


        <Input type="email" placeholder="Email" />
        <Input
        // id="name"
        // type="text"
        // className="col-span-3"
        // placeholder="aqui"
        // value={text}
        // onChange={(e) => setText(e.target.value)}

        // value={welcomeFormState.companyName}
        // onChange={(e) => {
        //     setWelcomeFormState((lastWelcomeFormState) => {
        //         return { ...lastWelcomeFormState, companyName: e.target.name}
        //     })
        // }}
        />
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
        <Label htmlFor="name" className="text-left">
            Whats your company size?
        </Label>
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

export function WelcomeModalForm({ closeModal }: WelcomeModalFormProps) {
    const [step, setStep] = useState(1);
    const [welcomeFormState] = useAtom(welcomeFormAtom)


    function nextStep() {
        if (step < 3) setStep((lastStep) => lastStep + 1);
        if (step === 3) closeModal()
    }

    function back() {
        if (step > 1) setStep((lastStep) => lastStep - 1);
    }

    return (
        <div className="bg-white p-6 rounded-2xl w-max">
            <div className="flex gap-8 items-center justify-center min-w-full">
                <Step step={step} stepOrder={1} setStep={setStep} />
                <Step step={step} stepOrder={2} setStep={setStep} />
                <Step step={step} stepOrder={3} setStep={setStep} />
            </div>

            {
                JSON.stringify(welcomeFormState)
            }

            {
                step === 1 && (
                    <Step01 />
                )
            }
            {
                step === 2 && (
                    <Step02 />
                )
            }
            {
                step === 3 && (
                    <Step03 />
                )
            }

            <div className="flex justify-between mt-3">
                {step > 1 && (
                    <button className="text-gray-700" onClick={back}>
                        Back
                    </button>
                )}

                <button
                    onClick={nextStep}
                    className="bg-black text-white py-2 px-8 rounded-full"
                >
                    {step === 3 ? "Fininsh" : "Next"}
                </button>
            </div>
        </div>
    );
}
