import React from "react";
import TodoList from "./components/TodoList";

// Todoアプリのメインページ
const Home = () => {
    return(
        <div className="container mx-auto p-8 text-container max-w-2xl">
            <h1 className="text-2xl mb-4">TOdo App</h1>
            <TodoList />
        </div>
    );
}
export default Home;