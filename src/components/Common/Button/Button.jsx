import { memo } from "react";
import cx from "classnames";
import styles from "./button.module.scss";

const Button = memo(
    ({
        type,
        onClick,
        text,
        submit,
        disabled,
        round = false,
        roundLg = false,
        icon = false,
        tab = false,
    }) => {
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
                disabled={disabled}
            >
                {text}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
