import useInput from "./../custom-hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        onValueChange: onNameChange,
        onValueBlur: onNameBlur,
        valid: nameValid,
        isTouched: nameTouched,
    } = useInput((name) => name.trim().length >= 6);

    const formValid = nameValid;

    const submitHandler = (e) => {
        e.preventDefault();
        if (!formValid) {
            return;
        }

        console.log("submit")
    };

    
    return (
        <form onSubmit={submitHandler}>
            <div
                className={`form-control ${
                    !nameValid && nameTouched ? "invalid" : ""
                }`}
            >
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onBlur={onNameBlur}
                    onChange={onNameChange}
                    value={enteredName}
                />

                {!nameValid && nameTouched && (
                    <p className='error-text'>
                        Your name must be at least 6 characters
                    </p>
                )}
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
