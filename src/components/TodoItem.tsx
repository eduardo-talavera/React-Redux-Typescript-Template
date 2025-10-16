import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '@/store/todos/todos';
import type { Todo } from '@/types/index';
import type { AppDispatch } from '@/store/index';

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className="flex justify-between items-center border-b py-2">
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
      >
        {todo.title}
      </span>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-red-500 hover:text-red-700 cursor-pointer"
      >
        ✕
      </button>
    </li>
  );
};
