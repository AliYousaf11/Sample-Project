import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState: initialState,
  reducers: {
    setCheckUsers: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setCheckUsers } = LoginSlice.actions;
export default LoginSlice.reducer;
