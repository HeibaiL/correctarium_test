import React, {useState} from "react";

const useInput = () => {
    const [input, setInput] = useState({})

    const onInputChange = e => {
        const {value, name} = e.target;
        setInput({...input, [name]: value})
    }
    return {
        input,
        onInputChange
    }
}
export default useInput;