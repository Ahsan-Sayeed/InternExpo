import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const initialState = {
  isLoggedIn: false,
  isLoading: true,
  isError: false,
  error: "",
  email: "",
  role: ""
};

export const createUser = createAsyncThunk(
  "auth/crateUser",
  async ({ email, password }, thunkAPI) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data;
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async () => {
    const data = await signOut(auth);
    return data;
  }
)

export const signIn = createAsyncThunk(
  "auth/login",
  async ({email,password},thunkAPI) => {
    const data = await signInWithEmailAndPassword(auth,email,password);
    return data;
  }
)

export const AuthSlice = createSlice({
  name:'Auth',
  initialState,
  reducers:{
    logInInfo:(state,action)=>{
      if(action.payload){
        state.isLoggedIn = true;
      }
      else{
        state.isLoggedIn = false;
      };
    }
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, payload) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, payload) => {
        state.isLoading = false;
        state.isError = true;
        state.error = payload;
      })
      .addCase(createUser.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.email = payload;
      })
      .addCase(logOut.fulfilled,(state,payload)=>{
        console.log('f')
      })
      .addCase(logOut.pending,(state,payload)=>{
        console.log('p')
      })
      .addCase(logOut.rejected,(state,payload)=>{
        console.log('r');
      })
      .addCase(signIn.fulfilled,()=>{
        console.log('Fullfill')
      })
      .addCase(signIn.pending,()=>{
          console.log("pending")
      })
      .addCase(signIn.rejected,()=>{
        console.log("maden an error");
      })
  },
})



export const { logInInfo } = AuthSlice.actions;

export default AuthSlice.reducer;