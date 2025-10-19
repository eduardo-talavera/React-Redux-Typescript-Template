import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Todo } from '@/types/index';

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id' | 'completed'>>) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Omit<Todo, 'completed'>>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) todo.title = action.payload.title;
    },
  },
});

export const { addTodo, setTodos, toggleTodo, deleteTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
