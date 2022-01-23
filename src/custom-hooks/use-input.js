import { useState, useReducer } from "react";

const initialState = {
    value: "",
    valid: false,
    isTouched: false,
};

const reducer = (state, action) => {
    console.log({ state, action });
    switch (action.type) {
        case "CHANGE": {
            state.value = action.value;
            state.valid = action.valid;
            state.isTouched = true;
            return state;
        }

        case "BLUR": {
            state.isTouched = true;
            return state;
        }

        default:
            return initialState;
    }
};

const useInput = (isValid) => {
    // const [value, setValue] = useState("");
    // const [valid, setValid] = useState(false);
    // const [isTouched, setIsTouched] = useState(false);

    const [inputState, dispatchState] = useReducer(reducer, initialState);
    console.log(inputState);

    const onValueChange = (e) => {
        const enteredValue = e.target.value.trim();
        console.log(enteredValue);
        console.log(isValid(enteredValue));
        dispatchState({
            type: "CHANGE",
            value: enteredValue,
            valid: isValid(enteredValue),
        });
        // setValue(enteredValue);
        // setIsTouched(true);
        // if (isValid(enteredValue)) {
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
