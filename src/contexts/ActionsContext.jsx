import {useState, createContext} from "react";

const ActionsContext = createContext()

const ActionsProvider = ({children}) => {
    const [availableActions, setAvailableActions] = useState(3);

    const DecreaseAvailableActions = () => {
        setAvailableActions(prevActions => prevActions - 1);
    }
    const IncreaseAvailableActions = () => {
        setTimeout(() => {
            setAvailableActions((prevActions) => prevActions + 1);
        }, 60000);
    }

    const IncreaseImmediatelyAvailableActions = () => {
        setAvailableActions((prevActions) => prevActions + 1);
    }

    return <ActionsContext.Provider value={{
        availableActions,
        DecreaseAvailableActions,
        IncreaseAvailableActions,
        IncreaseImmediatelyAvailableActions
    }}>
        {children}
    </ActionsContext.Provider>
}

export {ActionsContext, ActionsProvider}