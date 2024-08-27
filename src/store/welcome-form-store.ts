import { atom } from 'jotai'

export const welcomeFormAtom = atom(
    {
        step: 1,
        companyName: '',
        companySize: '0-10'
    }
)