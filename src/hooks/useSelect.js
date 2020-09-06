import React, {useState} from "react";

const useSelect = () => {
    const [selected, setSelected] = useState(null)

    const onSelectChange = e => {
        const {value} = e.target;
        setSelected(value)
    }
    return {
        selected,
        onSelectChange
    }
}
export default useSelect;