import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload) ;
    },
    togle: (state,action) =>{
      const togl=state.todos.find((todo)=> todo.id=== action.payload)
      togl.completed=!togl.completed
    },
    remove: (state,action)=>{
      state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
    }
  },
});


export const{ addTodo, togle, remove}= todoSlice.actions
export default todoSlice.reducer