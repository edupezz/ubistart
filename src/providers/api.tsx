import React from "react";

export const ApiContext = React.createContext({})

export const ApiProvider = (props: { children: any }) => {

    const address: any = {
        baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/'
    }
    
    return(
        <ApiContext.Provider value={address.baseUrl}>
            {props.children}
        </ApiContext.Provider>
    )
}