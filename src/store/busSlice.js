import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState1 = [{}];
const initialState = {
  bookings: [],
};

export const busSlice = createSlice({
  name: "buses",
  initialState,
  reducers: {
    addBusBooking: {
      reducer(state, action) {
        state.bookings.push(action.payload);
      },
      prepare(name, seats, date) {
        return {
          payload: {
            id: nanoid(),
            name,
            seats,
            date,
          },
        };
      },
    },
    deleteBusBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (bus) => bus.id !== action.payload.id
      );
    },

    updateBooking: (state, action) => {
      state.bookings.map((bus) => {
        if (bus.id === action.payload.id) {
          bus.name = action.payload.name;
          bus.seats = action.payload.seats;
          bus.date = action.payload.date;
        }
      });
    },
  },
});

export const { addBusBooking, deleteBusBooking, updateBooking } =
  busSlice.actions;
export default busSlice.reducer;
