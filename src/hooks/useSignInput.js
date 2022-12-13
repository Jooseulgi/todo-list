import { useState } from "react";

const useSignInput = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    const onEmailHandler = (e) => {
        const { value } = e.target;
        const regex = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;
        if (regex.test(value)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
        setEmail(value);
    };

    const onPwHandler = (e) => {
        const { value } = e.target;
        if (value.length >= 8) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
        setPw(value);
    };

    const onTypeChange = () => {
        setEmail("");
        setPw("");
        setEmailValid(false);
        setPwValid(false);
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
        onTypeChange,
    };
};

export default useSignInput;
