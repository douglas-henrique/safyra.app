'use client'
import { useState } from "react";
import { Step } from "./step";
import { Step01, Step02, Step03 } from "./steps";

interface WelcomeModalFormProps {
    closeModal: () => void
} 

const steps: { [key: number]: JSX.Element } = {
    1: <Step01 />,
    2: <Step02 />,
    3: <Step03 />,
};

export function WelcomeModalForm({ closeModal }: WelcomeModalFormProps) {
    const [step, setStep] = useState(1);

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

            {steps[step] || null}

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
