import React, { memo } from "react";
import cx from "classnames";
import styles from "./title.module.scss";

const Title = memo(({ children, largeTitle = false }) => {
    return (
        <h1 className={cx(styles.title, { [styles.largeTitle]: largeTitle })}>
            {children}
        </h1>
    );
});

Title.displayName = "Title";
export default Title;
