import { useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import TodoListPage from "../pages/TodoListPage/TodoListPage";
import SignPage from "../pages/SignPage/SignPage";
import styles from "./routes.module.scss";

const RootRoute = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            navigate("/todo");
        } else {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/todo" element={<TodoListPage />} />
                <Route path="/" element={<SignPage />} />
            </Routes>
        </div>
    );
};

export default RootRoute;
