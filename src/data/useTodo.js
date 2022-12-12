import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { authInstance } from "./useAuth";

const useTodo = () => {
    //const [user, setUser] = useState(false);
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");

    const onChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const getTodo = () => {
        authInstance("/todos")
            .then((res) => {
                setTodos(res.data);
            })
            .catch((error) => {
                if (error instanceof AxiosError) {
                    alert(error.response?.data.message);
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

    function getDefaultIsCompleted(id) {
        todos.forEach((item) => {
            if (item.id === id) {
                return item.isCompleted;
            }
        });
    }

    const onUpdateText = (
        id,
        editTitle,
        isCompleted = getDefaultIsCompleted(id)
    ) => {
        authInstance
            .put(`/todos/${id}`, { todo: editTitle, isCompleted: isCompleted })
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

    const onChcked = (id, title, isCompleted) => {
        setTodos(
            todos.map((item) =>
                item.id === id
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            )
        );
        onUpdateText(id, title, isCompleted);
    };

    const resultNum = todos.filter((item) => !item.isCompleted).length;

    return {
        todos,
        title,
        setTitle,
        getTodo,
        onCreate,
        onDelete,
        onChcked,
        onChangeHandler,
        onUpdateText,
        resultNum,
    };
};

export default useTodo;
