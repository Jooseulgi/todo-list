import React, { useContext } from "react";
import { UpdateTextContext } from "../../context/UpdateTextProvider";
import Button from "../Common/Button/Button";
import styles from "./todoList.module.scss";

const TodoForm = ({
    todos,
    onCreate,
    onUpdateText,
    title,
    setTitle,
    onChangeHandler,
}) => {
    const { update, setUpdate, id } = useContext(UpdateTextContext);
    const onSubmit = (e) => {
        e.preventDefault();
        update ? onUpdateText(id, title) : onCreate();
        console.log(todos);
        setTitle("");
        setUpdate(false);
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
