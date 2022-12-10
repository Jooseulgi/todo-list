import React, { useEffect, useRef, useState } from "react";
import dummy from "../../../data/todoList.json";
import styles from "../todoList.module.scss";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import { UpdateTextProvider } from "../../../context/UpdateTextProvider";

const TodoLayout = () => {
    const [data, setData] = useState(dummy);
    const onCreateData = (dataContent) => setData(data.concat(dataContent));
    const onUpdateText = (id, editTitle) => {
        setData(
            data.map((item) =>
                item.id === id ? { ...item, title: editTitle } : item
            )
        );
    };
    const onDelete = (id) => setData(data.filter((item) => item.id !== id));
    const onChcked = (id) => {
        setData(
            data.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const resultNum = data.filter((item) => !item.checked).length;

    return (
        <UpdateTextProvider>
            <div className={styles.todoList}>
                <h1 className={styles.headText}>TODO's TASKS ({resultNum})</h1>
                <ul className={styles.list}>
                    {data.map((item) => (
                        <TodoItem
                            key={item.id}
                            item={item}
                            onChcked={onChcked}
                            onDelete={onDelete}
                        />
                    ))}
                </ul>
                <TodoForm
                    onCreateData={onCreateData}
                    onUpdateText={onUpdateText}
                />
            </div>
        </UpdateTextProvider>
    );
};

export default TodoLayout;
