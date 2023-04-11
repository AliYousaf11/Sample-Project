import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
  Gender: "",
  phone: "",
  image: "",
};

const RegisterSlice = createSlice({
  name: "registerSlice",
  initialState: initialState,
  reducers: {
    setNewUsers: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});
// export const setNewUsers = (state) => state.user;
export const { setNewUsers } = RegisterSlice.actions;
export default RegisterSlice.reducer;
