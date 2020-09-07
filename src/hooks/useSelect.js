import React from "react";

const useSelect = () => {
    const [selected, setSelected] = React.useState(null)

    const onSelectChange = e => {
        const {value} = e.target;
        setSelected(value.toUpperCase())
    }
    return {
        selected,
        onSelectChange
    }
}
export default useSelect;