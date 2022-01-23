import useInput from "./../custom-hooks/use-input";

const BasicForm = () => {
    const {
        value: enteredFirstname,
        onValueChange: onFirstnameChange,
        onValueBlur: onFirstnameBlur,
        valid: firstnameValid,
        isTouched: firstnameTouched,
    } = useInput((firstname) => firstname.trim().length >= 6);

    const {
        value: enteredLastname,
        onValueChange: onLastnameChange,
        onValueBlur: onLastnameBlur,
        valid: lastnameValid,
        isTouched: lastnameTouched,
    } = useInput((lastname) => lastname.trim().length >= 6);

    const {
        value: enteredEmail,
        onValueChange: onEmailChange,
        onValueBlur: onEmailBlur,
        valid: emailValid,
        isTouched: emailTouched,
    } = useInput((email) => email.trim().length >= 6 && email.includes("@"));

    const formValid = firstnameValid && lastnameValid && emailValid;

    const submitHandler = (e) => {
        e.preventDefault();
        if (!formValid) {
            return;
        }

        console.log("submit");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div
                    className={`form-control ${
                        !firstnameValid && firstnameTouched ? "invalid" : ""
                    }`}
                >
                    <label htmlFor='name'>First Name</label>
                    <input
                        type='text'
                        id='name'
                        value={enteredFirstname}
                        onChange={onFirstnameChange}
                        onBlur={onFirstnameBlur}
                    />
                    {!firstnameValid && firstnameTouched && (
                        <p className='error-text'>
                            Your firstname must be at least 6 characters
                        </p>
                    )}
                </div>
                <div
                    className={`form-control ${
                        !lastnameValid && lastnameTouched ? "invalid" : ""
                    }`}
                >
                    <label htmlFor='name'>Last Name</label>
                    <input
                        type='text'
                        id='name'
                        value={enteredLastname}
                        onChange={onLastnameChange}
                        onBlur={onLastnameBlur}
                    />
                    {!lastnameValid && lastnameTouched && (
                        <p className='error-text'>
                            Your lastname must be at least 6 characters
                        </p>
                    )}
                </div>
            </div>
            <div
                className={`form-control ${
                    !emailValid && emailTouched ? "invalid" : ""
                }`}
            >
                <label htmlFor='name'>E-Mail Address</label>
                <input
                    type='text'
                    id='name'
                    value={enteredEmail}
                    onChange={onEmailChange}
                    onBlur={onEmailBlur}
                />
                {!emailValid && emailTouched && (
                    <p className='error-text'>
                        Your email must be at least 6 characters and includes
                        "@"
                    </p>
                )}
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
