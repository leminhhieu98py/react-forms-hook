import React, { useState, useEffect } from "react";

const useInput = (isValid) => {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const onValueChange = (e) => {
        const enteredValue = e.target.value.trim()
        setValue(enteredValue);
        setIsTouched(true);
        if (isValid(enteredValue)) {
            setValid(true);
        }else{
            setValid(false);
        }
    };

    const onValueBlur = () => {
        setIsTouched(true)
    };

    return {
        value,
        onValueChange,
        onValueBlur,
        valid,
        isTouched,
    };
};

export default useInput;
