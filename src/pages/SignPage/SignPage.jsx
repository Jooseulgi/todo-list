import React, { useState } from "react";
import Button from "../../components/Common/Button/Button";
import Sign from "../../components/Sign/Sign";
import styles from "./signPage.module.scss";

const SignPage = () => {
    const [login, setlogin] = useState(true);
    return (
        <div className={styles.signPage}>
            <div className={styles.tab}>
                <Button
                    type="tab"
                    onClick={() => setlogin(true)}
                    text={"LOGIN"}
                />
                <Button
                    type="tab"
                    onClick={() => setlogin(false)}
                    text={"SIGN UP"}
                />
            </div>
            {login ? (
                <Sign title={"로그인해주세요."} type={"login"} />
            ) : (
                <Sign title={"회원가입을 진행해주세요."} type={"signup"} />
            )}
        </div>
    );
};

export default SignPage;
