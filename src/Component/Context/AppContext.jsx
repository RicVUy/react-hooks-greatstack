import { createContext } from "react";

export const AppContext = createContext()

const ContextProvider = (props)=> {
//const name = "Ricardo"
    const phone = "12345678"
    return(
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider