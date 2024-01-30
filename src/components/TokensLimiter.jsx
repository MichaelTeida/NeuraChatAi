import {useState} from "react";

const TokensLimiter = () => {
    const [availableTokens, setAvailableTokens] = useState(0)

    // setAvailableTokens(prevTokens => prevTokens + 1)
    // setTimeout((setAvailableTokens(prevTokens => prevTokens - 1)), 20000)

    return availableTokens
}

export default TokensLimiter