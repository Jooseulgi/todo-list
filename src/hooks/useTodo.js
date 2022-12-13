import { useState } from "react";
import { AxiosError } from "axios";
import { authInstance } from "./useAuth";

const useTodo = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");

    const onChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const getTodo = () => {
        authInstance
            .get("/todos")
            .then((res) => {
                setTodos(res.data);
            })
            .catch((error) => {
                if (error instanceof AxiosError) {
                    alert("접근 권한이 없습니다.");
                    console.log(error);
                }
            });
    };

    const onCreate = () => {
        if (title.trim().length === 0) return;
        authInstance
            .post("/todos", { todo: title })
            .then((res) => {
                setTodos(todos.concat(res.data));
                console.log(todos, res.data);
            })
            .catch((error) => {
                if (error instanceof AxiosError) {
                    alert(error.response?.data.message);
                    console.log(error);
                }
            });
    };

    const onDelete = (id) => {
        authInstance
            .delete(`/todos/${id}`)
            .then(() => {
                setTodos(todos.filter((item) => item.id !== id));
            })
            .catch((error) => {
                if (error instanceof AxiosError) {
                    alert(error.response?.data.message);
                    console.log(error);
                }
            });
    };

    const getDefaultIsCompleted = (id) => {
        let isCompleted = false;
        todos.forEach((item) => {
            if (item.id === id) {
                isCompleted = item.isCompleted;
            }
        });
        return isCompleted;
    };

    const onUpdate = (
        id,
        editTitle,
        isCompleted = getDefaultIsCompleted(id)
    ) => {
        console.log(id, isCompleted);
        authInstance
            .put(`/todos/${id}`, { todo: editTitle, isCompleted })
            .then((res) => {
                console.log(isCompleted);
                setTodos(
                    todos.map((item) =>
                        item.id === res.data.id ? res.data : item
                    )
                );
            })
            .catch((error) => {
                if (error instanceof AxiosError) {
                    alert(error.response?.data.message);
                    console.log(error);
                }
            });
    };

    const resultNum = todos.filter((item) => !item.isCompleted).length;

    return {
        todos,
        title,
        setTitle,
        getTodo,
        onCreate,
        onDelete,
        onChangeHandler,
        onUpdate,
        resultNum,
    };
};

export default useTodo;
