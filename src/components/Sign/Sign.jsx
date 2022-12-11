import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { defaultInstance } from "../../data/client";
import Button from "../Common/Button/Button";
import Title from "../Common/Title/Title";
import styles from "./sign.module.scss";

const Sign = ({ title, type }) => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const [user, setUser] = useState(false);

    const navigate = useNavigate();

    const onEmailHandler = (e) => {
        const { value } = e.target;
        const regex = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;
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
        const regex = /(?=.*[a-zA-Z0-9])\w{8,}/i;
        if (regex.test(value)) {
            setPwValid(true);
        }
        if (!regex.test(value)) {
            setPwValid(false);
        }
        setPw(value);
    };

    const onConfirm = () => {
        defaultInstance
            .post(
                "/auth/signup",
                {
                    email: email,
                    password: pw,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((result) => {
                if (result.data.access_token !== undefined) {
                    console.log(email, pw);
                    localStorage.setItem("access_token", result.access_token);
                    setUser(true);
                    alert("회원가입에 성공했습니다.");
                    navigate("/todo");
                }
            })
            .catch((error) => console.log("error", error));
    };

    const onLogin = () => {
        defaultInstance
            .post(
                "/auth/signin",
                {
                    email: email,
                    password: pw,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
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

    useEffect(() => {
        setEmail("");
        setPw("");
    }, [type]);

    return (
        <div className={styles.sign}>
            <Title largeTitle>{title}</Title>
            <div className={styles.form}>
                <div className={styles.inputBox}>
                    <label>이메일 주소</label>
                    <input
                        type="text"
                        placeholder="@포함 입력해주세요."
                        value={email}
                        onChange={onEmailHandler}
                    />
                </div>
                <div className={styles.errorMsg}>
                    {!emailValid && email.length > 0 && (
                        <p>올바른 이메일을 입력해주세요.</p>
                    )}
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.inputBox}>
                    <label>비밀번호</label>
                    <input
                        placeholder="8자이상 입력해주세요."
                        type="password"
                        value={pw}
                        onChange={onPwHandler}
                    />
                </div>
                <div className={styles.errorMsg}>
                    {!pwValid && pw.length > 0 && (
                        <p> 8자 이상 입력해주세요.</p>
                    )}
                </div>
            </div>
            <div className={styles.button}>
                <div className={styles.errorMsg}>
                    <p>올바른 이메일을 입력해주세요.</p>
                </div>
                {type === "signup" ? (
                    <Button
                        type="roundLg"
                        onClick={onConfirm}
                        disabled={notAllow}
                        text={"회원가입"}
                    />
                ) : (
                    <Button
                        type="roundLg"
                        onClick={onLogin}
                        disabled={notAllow}
                        text={"로그인"}
                    />
                )}
            </div>
        </div>
    );
};

export default Sign;
