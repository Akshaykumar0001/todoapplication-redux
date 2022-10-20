// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import Signup from "../Components/LoginPage/Signup";

// const intialState = {
//   token: "",
//   loading: "",
//   error: "",
// };
// const fetch2 = async (api, body, token = "") => {
//   const res = await fetch("/signup", {
//     method: "post",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   return await res.json();
// };
// export const signupuser = createAsyncThunk("signupuser", async (body) => {
//   const result = await fetch2("/singup", body);
//   return result;
// });
// const authReducer = createSlice({
//   name: "user",
//   intialState,
//   reducers: {},
//   extraReducers: {
//     [signupuser.fulfilled]: (state, action) => {
//       state.loading = false;
//       if (action.payload.error) {
//         state.error = action.payload.error;
//       }
//     },
//     [signupuser.pending]: (state, action) => {
//       state.loading = true;
//     },
//   },
// });

// export default authReducer.reducer;
