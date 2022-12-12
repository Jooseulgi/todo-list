import { useState } from "react";

const useSignInput = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    const onEmailHandler = (e) => {
        const { value } = e.target;
        const regex = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;
        console.log(value);
        if (regex.test(value)) {
            setEmailValid(true);
        }
        if (!regex.test(value)) {
            setEmailValid(false);
        }
        setEmail(value);
    };

    const onPwHandler = (e) => {
        const { value } = e.target;
        console.log(value);
        if (value.length >= 8) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
        setPw(value);
    };

    return {
        email,
        setEmail,
        pw,
        setPw,
        emailValid,
        pwValid,
        onEmailHandler,
        onPwHandler,
    };
};

export default useSignInput;
