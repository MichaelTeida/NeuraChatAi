import {useState, createContext} from "react";

const ActionsContext = createContext()

const ActionsProvider = ({children}) => {
    const [availableActions, setAvailableActions] = useState(3)

    const DecreaseAvailableActions = () => {
        if (availableActions > 0) {
            setAvailableActions(prevActions => prevActions - 1)
        }
    }

    const IncreaseAvailableActions = () => {
        if (availableActions < 3) {
            setTimeout(() => {
                setAvailableActions((prevActions) => prevActions + 1)
            }, 20000)
        }
    }

    const IncreaseImmediatelyAvailableActions = () => {
        if (availableActions < 3) {
            setAvailableActions((prevActions) => prevActions + 1);
        }
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