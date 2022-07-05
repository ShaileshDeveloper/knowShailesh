import { useContext ,createContext,useState } from "react";


export const CreateContext =  createContext()

export default function ThemeProvider({children}){
    const [darkMode,setDarkMode] = useState(false)

    return <CreateContext.Provider value={{darkMode,setDarkMode}}>
        {children}
    </CreateContext.Provider>
}

export function UseTheme(){
    return useContext(CreateContext)
}


