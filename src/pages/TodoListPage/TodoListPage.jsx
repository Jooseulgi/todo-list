import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoLayout from "../../components/TodoList/TodoLayout";

const TodoListPage = () => {
    // const [todos, setTodos] = useState([]);
    // const [selectedTodo, setSelectedTodo] = useState(null);
    // const [insertToggle, setInsertToggle] = useState(false);

    return (
        <div>
            <TodoLayout />
        </div>
    );
};

export default TodoListPage;
