import { useState } from "react";
import Box from "./components/Box";
import Input from "./components/input";

export default function App() {
  const [todo, setTodo] = useState([]);

  const removeTodo = (id) => {
    const newToDo = todo.filter((d, index) => {
      if (index !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTodo(newToDo);
  };

  const addtodoHandler = (items) => {
    setTodo([
      ...todo,
      {
        items,
        time: new Date().toString(),
      },
    ]);
  };

  return (
    <div className="p-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
        <h1 className="font-bold text-2xl text-center "> To Do List</h1>
        <br></br>
        <Input handler={addtodoHandler} />
        <Box data={todo} removeHandler={removeTodo} />
      </div>
    </div>
  );
}
