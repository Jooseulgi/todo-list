import React, { useState } from "react";
import styles from "./notFound.module.scss";

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <strong>존재하지 않는 페이지입니다.</strong>
            <p className={styles.desc}>
                이용에 불편을 드려 죄송합니다. <br />
                주소를 다시 한 번 확인해주세요.
            </p>
        </div>
    );
};

export default NotFound;
