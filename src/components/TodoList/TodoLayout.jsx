import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./todoList.module.scss";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { UpdateTextProvider } from "../../context/UpdateTextProvider";
import Title from "../Common/Title/Title";
import useTodo from "../../hooks/useTodo";
import Button from "../Common/Button/Button";

const TodoLayout = () => {
    const navigate = useNavigate();
    const {
        todos,
        getTodo,
        onDelete,
        onCreate,
        onUpdate,
        title,
        setTitle,
        onChangeHandler,
        resultNum,
    } = useTodo();

    useEffect(() => {
        getTodo();
    }, [getTodo]);

    return (
        <UpdateTextProvider>
            <div className={styles.todoList}>
                <div className={styles.title}>
                    <Title>TODO's TASKS ({resultNum})</Title>
                    <Button
                        type="round"
                        text={"LOGOUT"}
                        onClick={() => {
                            localStorage.removeItem("access_token");
                            navigate("/");
                        }}
                    />
                </div>
                {todos.length ? (
                    <ul className={styles.list}>
                        {todos.map((item) => (
                            <TodoItem
                                key={item.id}
                                item={item}
                                onUpdate={onUpdate}
                                onDelete={onDelete}
                            />
                        ))}
                    </ul>
                ) : (
                    <p className={styles.listNone}>저장된 할일이 없습니다.</p>
                )}
                <TodoForm
                    todos={todos}
                    title={title}
                    setTitle={setTitle}
                    onCreate={onCreate}
                    onUpdate={onUpdate}
                    onChangeHandler={onChangeHandler}
                />
            </div>
        </UpdateTextProvider>
    );
};

export default TodoLayout;
