import React, { useEffect, useState } from "react";
import styles from "./sign.module.scss";
import useSign from "../../hooks/useSign";
import useSignInput from "../../hooks/useSignInput";
import Button from "../Common/Button/Button";
import Title from "../Common/Title/Title";

const Sign = ({ title, type }) => {
    const [notAllow, setNotAllow] = useState(true);
    const {
        email,
        pw,
        emailValid,
        pwValid,
        onTypeChange,
        onEmailHandler,
        onPwHandler,
    } = useSignInput();
    const { onLogin, onSingup } = useSign();

    useEffect(() => {
        if (emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [email, emailValid, pw, pwValid]);

    useEffect(() => {
        setNotAllow(true);
        onTypeChange();
    }, [type]);

    return (
        <div className={styles.sign}>
            <div className={styles.centerBox}>
                <Title largeTitle>{title}</Title>
                <div className={styles.form}>
                    <div className={styles.input}>
                        <label>이메일 주소</label>
                        <input
                            type="text"
                            placeholder="ex) wanted@wanted.com"
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
                    <div className={styles.input}>
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
            </div>
            <div className={styles.button}>
                {type === "signup" ? (
                    <Button
                        type="roundLg"
                        onClick={() => onSingup(email, pw)}
                        disabled={notAllow}
                        text={"회원가입"}
                    />
                ) : (
                    <Button
                        type="roundLg"
                        onClick={() => onLogin(email, pw)}
                        disabled={notAllow}
                        text={"로그인"}
                    />
                )}
            </div>
        </div>
    );
};

export default Sign;
