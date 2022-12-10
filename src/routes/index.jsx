import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoListPage from "../pages/TodoListPage";
import SignPage from "../pages/SignPage";
import NotFound from "../pages/NotFound/NotFound";

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/todo" element={<TodoListPage />} />
                <Route path="/" element={<SignPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoute;
