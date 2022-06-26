import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState1 = [{}];
const initialState = {
  bookings: [],
  allBuses: [
    { id: 1, name: "Bus A", seats: 5 },
    { id: 2, name: "Bus B", seats: 2 },
    { id: 3, name: "Bus C", seats: 8 },
    { id: 4, name: "Bus D", seats: 8 },
    { id: 5, name: "Bus E", seats: 2 },
  ],
};

export const busSlice = createSlice({
  name: "buses",
  initialState,
  reducers: {
    getBusesList: (state) => {
      return state.allBuses;
    },
    addBusBooking: {
      reducer(state, action) {
        console.log("payload", action.payload);
        state.bookings.push(action.payload);
      },
      prepare(name, seats, date, combi1) {
        console.log("dsdsdsd", combi1);
        return {
          payload: {
            id: nanoid(),
            name,
            seats,
            date,
            combi1
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

// export const getAllBuses = (state) => state.allBuses;

export const { addBusBooking, deleteBusBooking, updateBooking, getBusesList } =
  busSlice.actions;
export default busSlice.reducer;
