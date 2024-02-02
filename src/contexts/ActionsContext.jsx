import {useState, createContext} from "react";

const ActionsContext = createContext()

const ActionsProvider = ({children}) => {
    const MAX_ACTIONS = 3
    const TIMEOUT_DURATION = 20000
    const [availableActions, setAvailableActions] = useState(MAX_ACTIONS)

    const DecreaseAvailableActions = () => {
        if (availableActions > 0) {
            setAvailableActions(prevActions => prevActions - 1)
        }
    }

    const IncreaseAvailableActions = () => {
        if (availableActions <= MAX_ACTIONS) {
            const timeout = setTimeout(() => {
                setAvailableActions((prevActions) => prevActions + 1)
            }, TIMEOUT_DURATION)

            return () => clearTimeout(timeout)
        }
    };

    const IncreaseImmediatelyAvailableActions = () => {
        if (availableActions <= MAX_ACTIONS) {
            setAvailableActions((prevActions) => prevActions + 1)
        }
    };

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