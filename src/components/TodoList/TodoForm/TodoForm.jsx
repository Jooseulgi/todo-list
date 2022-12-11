import React, { useContext, useEffect, useRef, useState } from "react";
import { MdSecurityUpdate } from "react-icons/md";
import { UpdateTextContext } from "../../../context/UpdateTextProvider";
import Button from "../../Common/Button/Button";
import styles from "../todoList.module.scss";

const TodoForm = ({ onCreateData, onUpdateText }) => {
    const { update, id } = useContext(UpdateTextContext);
    const [title, setTitle] = useState("");
    const nextId = useRef(4);
    const dataContent = {
        id: nextId.current,
        title,
        checked: false,
    };
    const onChangeHandler = (e) => {
        setTitle(e.target.value);
    };
    const onCreate = () => {
        if (title.trim().length === 0) return;
        onCreateData(dataContent);
        nextId.current += 1;
    };
    const onSubmit = (e) => {
        e.preventDefault();
        update ? onUpdateText(id, title) : onCreate();
        setTitle("");
    };
    return (
        <form className={styles.formBox} onSubmit={onSubmit}>
            <div className={styles.input}>
                <label htmlFor="title"></label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={onChangeHandler}
                    placeholder={
                        update ? "할일을 수정하세요." : "할일을 입력하세요."
                    }
                />
            </div>
            <div className={styles.createBtn} onClick={onSubmit}>
                <Button type="round" text={update ? "Update" : "New Task"} />
            </div>
        </form>
    );
};

export default TodoForm;
