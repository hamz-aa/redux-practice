import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "john",
    email: "john@mail.com",
  },
  reducers: {
    update: (state, action) => {},
  },
});
