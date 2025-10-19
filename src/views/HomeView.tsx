import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "@/api/todosApi";
import { setTodos } from "@/store/todos/todos";

export const HomeView = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      if (todos?.length) dispatch(setTodos(todos));
    };

    fetchTodos();
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-3xl mb-10">Home</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}
