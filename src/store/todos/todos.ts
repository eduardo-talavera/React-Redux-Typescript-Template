import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface TodosState {
  todos: Todo[]
}

export type Todo = {
  id: number,
  title: string
  completed: boolean
}

const initialState: TodosState = {
  todos: []
}


const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    }
  }
});

export const {  setTodos } = todosSlice.actions

export default todosSlice.reducer