import { useState } from "react"

const useLocalSotrage = (key, intialValue) => {
    const [state, setState] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }

        localStorage.setItem(key, JSON.stringify(intialValue));
        return intialValue;
    })

    const setStoredState = (value) => {
        localStorage.setItem(key, JSON.stringify(value))
        setState(value)
    }

    return ([state, setStoredState])
}

export default useLocalSotrage