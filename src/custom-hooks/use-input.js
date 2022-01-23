import { useState, useReducer } from "react";

const initialState = {
    value: "",
    valid: false,
    isTouched: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                value: action.value,
                valid: action.valid,
                isTouched: true,
            };
        }

        case "BLUR": {
            return {
                value: action.value,
                valid: action.valid,
                isTouched: true,
            };
        }

        default:
            return initialState;
    }
};

const useInput = (validateValueFunction) => {
    // const [value, setValue] = useState("");
    // const [valid, setValid] = useState(false);
    // const [isTouched, setIsTouched] = useState(false);

    const [inputState, dispatchState] = useReducer(reducer, initialState);
    console.log(inputState);

    const onValueChange = (e) => {
        const enteredValue = e.target.value.trim();
        console.log(enteredValue);
        console.log(validateValueFunction(enteredValue));
        dispatchState({
            type: "CHANGE",
            value: enteredValue,
            valid: validateValueFunction(enteredValue),
        });
        // setValue(enteredValue);
        // setIsTouched(true);
        // if (validateValueFunction(enteredValue)) {
        //     setValid(true);
        // } else {
        //     setValid(false);
        // }
    };

    const onValueBlur = () => {
        dispatchState({
            type: "BLUR",
        });
        // setIsTouched(true);
    };

    return {
        value: inputState.value,
        onValueChange,
        onValueBlur,
        valid: inputState.valid,
        isTouched: inputState.isTouched,
    };
};

export default useInput;
