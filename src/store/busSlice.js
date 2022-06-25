import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buses: {},
};

export const busSlice = createSlice({
  name: "buses",
  initialState,
  reducers: {
    addBusBooking: (state, action) => {
      console.log("payloadd", action.payload);
      //   state.buses.value.push(action.payload);
    },

    deleteBusBooking: (state, action) => {
      state.value = state.buses.value.filter(
        (bus) => bus.id !== action.payload.id
      );
    },

    updateBooking: (state, action) => {
      state.value.map((bus) => {
        if (bus.id === action.payload.id) {
          bus.name = action.payload.name;
        }
      });
    },
  },
});

export const { addBusBooking, deleteBusBooking, updateBooking } =
  busSlice.actions;
export default busSlice.reducer;
