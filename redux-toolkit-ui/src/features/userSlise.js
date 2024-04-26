import{createSlice} from '@reduxjs/toolkit'
const initialState={
    firstName:'',
    lastName:'',
}
const userSlise=createSlice({
    name:'user',
    initialState,
    reducers:{
        setFirstname:(state,action)=>{
            state.firstName=action.payload
        },
        setLastname:(state, action)=>{
            state.lastName=action.payload   
        }


    }
})

export const {setFirstname,setLastname}=userSlise.actions
export default userSlise.reducer
