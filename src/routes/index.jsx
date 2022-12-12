import { useNavigate, Route, Routes } from "react-router-dom";
import TodoListPage from "../pages/TodoListPage/TodoListPage";
import SignPage from "../pages/SignPage/SignPage";
import NotFound from "../pages/NotFound/NotFound";
import styles from "./routes.module.scss";
import { useEffect, useState } from "react";
const RootRoute = () => {
    const [user] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            console.log("access_token");
            navigate("/todo");
            console.log("/로 갈수없다");
        } else {
            navigate("/");
        }
    }, [navigate, user]);
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/todo" element={<TodoListPage />} />
                <Route path="/" element={<SignPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default RootRoute;
