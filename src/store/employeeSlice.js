import { createSlice } from "@reduxjs/toolkit";
import employee from "../utils/employees";
const initial_State = employee;

const employeeSlice = createSlice({
  name: "employee",
  initialState: initial_State,
  reducers: {
    addNew: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addNew } = employeeSlice.actions;
export default employeeSlice.reducer;
