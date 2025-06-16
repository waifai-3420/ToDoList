import React from "react";
import TodoList from "./components/TodoList";

// Todoアプリのメインページ
const Home = () => {
    return(
        <div className="flex flex-col justify-center items-center p-8">
            <h1 className="text-center text-2xl mb-4">Todo App</h1>
            <TodoList />
        </div>
    );
}
export default Home;