import React, { createContext, useState } from "react";

export const UpdateTextContext = createContext({});

export const UpdateTextProvider = ({ children }) => {
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState(undefined);
    const onUpdateState = (num) => {
        !id && setUpdate((update) => !update);
        setId(num);
        console.log(num, id, update);
        if (num !== id) return;
        setUpdate((update) => !update);
        setId(undefined);
    };
    return (
        <UpdateTextContext.Provider
            value={{ onUpdateState, update, setUpdate, id, setId }}
        >
            {children}
        </UpdateTextContext.Provider>
    );
};
