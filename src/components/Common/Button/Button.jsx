import { memo } from "react";
// import { useNavigate } from "react-router-dom";
import cx from "classnames";

import styles from "./button.module.scss";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

const Button = memo(
    ({
        type,
        onClick,
        text,
        submit,
        round = false,
        roundLg = false,
        icon = false,
        tab = false,
    }) => {
        // const navigate = useNavigate();
        return (
            <button
                type={submit ? "submit" : "button"}
                className={cx(styles.button, styles[type], {
                    [styles.round]: round,
                    [styles.roundLg]: roundLg,
                    [styles.icon]: icon,
                    [styles.tab]: tab,
                })}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
