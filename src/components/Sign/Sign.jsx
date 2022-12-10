import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sign.module.scss";

const Sign = ({ title, type }) => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const [user, setUser] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            navigate("/todo");
        } else {
            navigate("/");
        }
    }, [user]);

    const handleEmail = (e) => {
        const { value } = e.target;
        const regex = /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$/;
        if (regex.test(value)) {
            setEmailValid(true);
        }
        if (!regex.test(value)) {
            setEmailValid(false);
        }
        setEmail(value);
    };

    const handlePassword = (e) => {
        const { value } = e.target;
        const regex = /(?=.*[a-zA-Z0-9])\w{8,}/i;
        if (regex.test(value)) {
            setPwValid(true);
        }
        if (!regex.test(value)) {
            setPwValid(false);
        }
        setPw(value);
    };

    const onClickConfirmButton = () => {
        fetch("https://pre-onboarding-selection-task.shop/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: pw,
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.access_token !== undefined) {
                    localStorage.setItem("access_token", result.access_token);
                    setUser(true);
                    navigate("/todo");
                }
            })
            .catch((error) => console.log("error", error));
    };

    const onClickLoginButton = () => {
        fetch("https://pre-onboarding-selection-task.shop/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: pw,
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.access_token !== undefined) {
                    localStorage.setItem("access_token", result.access_token);
                    navigate("/todo");
                }
            })
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        if (emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid]);

    return (
        <div className={styles.sign}>
            <h1>{title}</h1>
            <div className={styles.form}>
                <div className={styles.inputBox}>
                    <label>이메일 주소</label>
                    <input
                        type="text"
                        placeholder="@포함 입력해주세요."
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <p className={styles.errorMsg}>
                    {!emailValid && email.length > 0 && (
                        <p>올바른 이메일을 입력해주세요.</p>
                    )}
                </p>
            </div>
            <div className={styles.form}>
                <div className={styles.inputBox}>
                    <label>비밀번호</label>
                    <input
                        placeholder="8자이상 입력해주세요."
                        type="password"
                        value={pw}
                        onChange={handlePassword}
                    />
                </div>
                <p className={styles.errorMsg}>
                    {!pwValid && pw.length > 0 && (
                        <p> 8자 이상 입력해주세요.</p>
                    )}
                </p>
            </div>
            <div>
                {type === "signup" ? (
                    <button
                        onClick={onClickConfirmButton}
                        disabled={notAllow}
                        type="button"
                    >
                        회원가입
                    </button>
                ) : (
                    <button
                        onClick={onClickLoginButton}
                        disabled={notAllow}
                        type="button"
                    >
                        로그인
                    </button>
                )}
            </div>
        </div>
    );
};

export default Sign;
