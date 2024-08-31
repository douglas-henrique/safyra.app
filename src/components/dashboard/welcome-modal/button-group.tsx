import { useAtom } from 'jotai'
import type { ButtonGroupType } from './types'
import { welcomeFormAtom } from '@/store/welcome-form-store'


export const ButtonGroup: React.FC<{ options: ButtonGroupType[] }> = ({ options }) => {
    const [welcomeFormState, setWelcomeFormState] = useAtom(welcomeFormAtom)

    const activeCSS = 'flex items-center font-bold justify-center border rounded-md p-3 bg-black text-white hover:bg-white hover:font-medium  hover:text-black transition-all ease-linear hover:cursor-pointer'
    const inactiveCSS = 'flex items-center justify-center border rounded-md p-3 hover:bg-black hover:text-white transition-all ease-linear hover:cursor-pointer'
    return options.map((element, index) => <button key={index} onClick={() => {
        setWelcomeFormState((lastWelcomeFormState) => {
            return { ...lastWelcomeFormState, companySize: element.value }
        })
    }} className={element.value === welcomeFormState.companySize ? activeCSS : inactiveCSS}>
        <span className=" hover:cursor-pointer"></span>
        <span className="hover:cursor-pointer">{element.label}</span>
    </button>)
}
