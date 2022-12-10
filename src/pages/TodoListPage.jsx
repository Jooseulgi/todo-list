import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoLayout from "../components/TodoList/TodoLayout/TodoLayout";

const TodoListPage = () => {
    // const [todos, setTodos] = useState([]);
    // const [selectedTodo, setSelectedTodo] = useState(null);
    // const [insertToggle, setInsertToggle] = useState(false);

    // const [user] = useState(false);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem("access_token")) {
    //         navigate("/todo");
    //     } else {
    //         navigate("/");
    //     }
    // }, [user]);

    // const getTodo = () => {
    //     fetch("https://pre-onboarding-selection-task.shop/todos", {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((result) => {
    //             setTodos(result);
    //         })
    //         .catch((error) => console.log("error", error));
    // };

    // useEffect(() => {
    //     getTodo();
    // }, []);

    // const onInsertToggle = () => {
    //     if (selectedTodo) {
    //         setSelectedTodo(null);
    //     }
    //     setInsertToggle((prev) => !prev);
    // };

    // const onInsertTodo = (text) => {
    //     if (text === "") {
    //         return alert("할일을 입력해주세요.");
    //     } else {
    //         fetch("https://pre-onboarding-selection-task.shop/todos", {
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem(
    //                     "access_token"
    //                 )}`,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 todo: text,
    //             }),
    //         });
    //     }
    //     getTodo();
    // };

    // const onRemove = (id) => {
    //     fetch(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //         },
    //     });
    //     setTodos((todos) => todos.filter((list) => list.id !== id));
    // };

    // const onUpdate = (id, isCompleted, text) => {
    //     fetch(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             todo: text,
    //             isCompleted: isCompleted,
    //         }),
    //     });
    // };

    // const onCheckedToggle = (id, isCompleted, text) => {
    //     setTodos((todos) =>
    //         todos.map((list) =>
    //             list.id === id
    //                 ? { ...list, isCompleted: !list.isCompleted }
    //                 : list
    //         )
    //     );
    //     onUpdate(id, isCompleted, text);
    // };

    // const onChangeSelectedTodo = (todo) => {
    //     setSelectedTodo(todo);
    // };

    // const todoLength = todos.filter((list) => !list.isCompleted).length;

    return (
        <div>
            <TodoLayout />
        </div>
    );
};

export default TodoListPage;
