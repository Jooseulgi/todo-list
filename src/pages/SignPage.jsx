import React, { useState } from "react";
import Sign from "../components/Sign/Sign";
import * as S from "./SignPage.style";

const SignPage = () => {
    const [login, setlogin] = useState(true);
    return (
        <>
            <div>
                <button onClick={() => setlogin(true)}>로그인</button>
                <button onClick={() => setlogin(false)}>회원가입</button>
            </div>
            {login ? (
                <Sign title={"로그인해주세요."} type={"login"} />
            ) : (
                <Sign title={"회원가입을 진행해주세요."} type={"signup"} />
            )}
        </>
    );
};

export default SignPage;
