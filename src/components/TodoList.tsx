import { useSelector } from 'react-redux';
import { type RootState } from '@/store/index';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {todos.length === 0 ? (
        <p className="text-gray-500">No hay tareas aún.</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};
