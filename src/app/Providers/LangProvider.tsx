import { ReactNode, createContext, useState } from "react";

export const LangCtx = createContext<{lang: string}>({
    lang: ''
})

const LangProvider = ({children} : {children: ReactNode}) => {

    const [lang, setLang] = useState<string>('kk')

    return <LangCtx.Provider value={{lang}}>{children}</LangCtx.Provider>

}

export default LangProvider