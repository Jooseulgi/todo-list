import React, { useContext } from "react";
import styles from "./todoList.module.scss";
import cx from "classnames";
import { RiDeleteBinLine } from "react-icons/ri";
import { TfiPencil } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";
import { UpdateTextContext } from "../../context/UpdateTextProvider";
import Button from "../Common/Button/Button";

const TodoItem = ({ item, onUpdate, onDelete }) => {
    const { update, onUpdateState, id } = useContext(UpdateTextContext);
    return (
        <li>
            <div className={styles.checkbox}>
                <label
                    className={cx({
                        [styles.checkText]: item.isCompleted,
                    })}
                    htmlFor="checkbox"
                    onClick={() => {
                        onUpdate(item.id, item.todo, !item.isCompleted);
                    }}
                >
                    {item.todo}
                </label>
                <input
                    type="checkbox"
                    id="checkbox"
                    defaultChecked={item.isCompleted}
                />
            </div>
            <div className={styles.btnBox}>
                <Button
                    type="icon"
                    onClick={() => {
                        onUpdateState(item.id);
                    }}
                    text={
                        update && item.id === id ? (
                            <MdOutlineCancel className={styles.cancelBtn} />
                        ) : (
                            <TfiPencil className={styles.updateBtn} />
                        )
                    }
                />
                <Button
                    type="icon"
                    onClick={() => onDelete(item.id)}
                    text={<RiDeleteBinLine />}
                />
            </div>
        </li>
    );
};

export default TodoItem;
