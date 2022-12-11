import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoListPage from "../pages/TodoListPage/TodoListPage";
import SignPage from "../pages/SignPage/SignPage";
import NotFound from "../pages/NotFound/NotFound";
import styles from "./routes.module.scss";
const RootRoute = () => {
    return (
        <div className={styles.app}>
            <Router>
                <Routes>
                    <Route path="/todo" element={<TodoListPage />} />
                    <Route path="/" element={<SignPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
};

export default RootRoute;
