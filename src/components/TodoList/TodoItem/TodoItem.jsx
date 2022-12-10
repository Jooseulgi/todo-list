import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "../todoList.module.scss";
import cx from "classnames";
import { RiDeleteBinLine } from "react-icons/ri";
import { TfiPencil } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";
import { UpdateTextContext } from "../../../context/UpdateTextProvider";

const TodoItem = ({ item, onChcked, onDelete }) => {
    const { update, onUpdateState, id } = useContext(UpdateTextContext);
    return (
        <li>
            <div className={styles.checkbox}>
                <label
                    className={cx({ [styles.checkText]: item.checked })}
                    htmlFor="checkbox"
                    onClick={() => onChcked(item.id)}
                >
                    {item.title}
                </label>
                <input
                    type="checkbox"
                    id="checkbox"
                    defaultChecked={item.checked}
                />
            </div>
            <div className={styles.btnBox}>
                <button
                    type="button"
                    onClick={() => {
                        onUpdateState(item.id);
                    }}
                >
                    {update && item.id === id ? (
                        <MdOutlineCancel className={styles.cancelBtn} />
                    ) : (
                        <TfiPencil className={styles.updateBtn} />
                    )}
                </button>
                <button
                    className={styles.deleteBtn}
                    type="button"
                    onClick={() => onDelete(item.id)}
                >
                    <RiDeleteBinLine />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
