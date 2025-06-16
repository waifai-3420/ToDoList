"use client"

import React from 'react';
import TodoItem from './TodoItem';

// 入力フィールドのプロパティを定義
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TodoList = () => {
    // タスクと新しいタスクの状態を管理
    const [tasks, setTasks] = React.useState<Array<{ task: string; completed: boolean }>>([]);
    const [newTask, setNewTask] = React.useState('');

    //タスク配列に新しいタスクを追加する関数
    const addTask = () => {
        // 新しいタスクが空でない場合のみ追加
        if (newTask.trim() !== '') {
            setTasks([...tasks, { task: newTask, completed: false }]);
            setNewTask(''); // 入力フィールドをクリア
        }
    };

    // タスクを削除する関数
    const removeTask = (index: number) => {
        const newTasks = [...tasks];
        // 指定されたインデックスのタスクを削除
        newTasks.splice(index, 1); 
        // タスク配列の状態を更新
        setTasks(newTasks);
    };

    const inputProps: InputProps = {
        type: "text",
        placeholder: "Add a new task",
        value: newTask,
        onChange: (e) => setNewTask(e.target.value),
        onKeyDown: (e) => e.key === 'Enter' && addTask(),
        className: "border p-2 mb-8 w-full"
    };

    return (
        <div className='p-4 max-w-md w-full bg-white rounded shadow'>
            {/* 新しいタスクの入力フィールド */}
            <input {...inputProps} />
            {/* タスクをレンダリング */}
            <div>
                {tasks.map((task, index) => (
                    <TodoItem 
                        key={index} 
                        task={task.task} 
                        toggleCompletion={() => removeTask(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;