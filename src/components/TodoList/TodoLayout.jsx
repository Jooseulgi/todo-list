import React, { useEffect } from "react";
import styles from "./todoList.module.scss";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { UpdateTextProvider } from "../../context/UpdateTextProvider";
import Title from "../Common/Title/Title";
import useTodo from "../../data/useTodo";

const TodoLayout = () => {
    const {
        todos,
        getTodo,
        onDelete,
        onChcked,
        onCreate,
        onUpdateText,
        title,
        setTitle,
        onChangeHandler,
        resultNum,
    } = useTodo();

    useEffect(() => {
        getTodo();
    }, []);

    return (
        <UpdateTextProvider>
            <div className={styles.todoList}>
                <Title>TODO's TASKS ({resultNum})</Title>
                {todos.length ? (
                    <ul className={styles.list}>
                        {todos.map((item) => (
                            <TodoItem
                                key={item.id}
                                item={item}
                                onChcked={onChcked}
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
                    onUpdateText={onUpdateText}
                    onChangeHandler={onChangeHandler}
                />
            </div>
        </UpdateTextProvider>
    );
};

export default TodoLayout;
