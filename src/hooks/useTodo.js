import { useState } from "react";
import { AxiosError } from "axios";
import { authInstance } from "./useAuth";

const useTodo = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");

    const onChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const getTodo = async () => {
        await authInstance
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

    const onCreate = async () => {
        if (title.trim().length === 0) return;
        await authInstance
            .post("/todos", { todo: title })
            .then((res) => {
                setTodos(todos.concat(res.data));
            })
            .catch((error) => {
                if (error instanceof AxiosError) {
                    alert(error.response?.data.message);
                    console.log(error);
                }
            });
    };

    const onDelete = async (id) => {
        await authInstance
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

    const onUpdate = async (
        id,
        editTitle,
        isCompleted = getDefaultIsCompleted(id)
    ) => {
        await authInstance
            .put(`/todos/${id}`, { todo: editTitle, isCompleted })
            .then((res) => {
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
