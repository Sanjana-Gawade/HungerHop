import React, {useState} from "react";
import MyContext from "./MyContext";


export const MyProvider  = ({children}) => {
    const [background, setBackground]= useState('ligth');


    return (
        <MyContext.Provider value={{background,setBackground}}>
            {children}
        </MyContext.Provider>
    );
}

