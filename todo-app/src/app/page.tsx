import React from "react";
import TodoList from "./components/TodoList";

// Todoアプリのメインページ
const Home = () => {
    return(
        <div className="flex flex-col items-center p-8 max-w-md w-full">
            <h1 className="text-2xl mb-4">Todo App</h1>
            <TodoList />
        </div>
    );
}
export default Home;