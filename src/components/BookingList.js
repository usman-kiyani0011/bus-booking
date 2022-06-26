import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteBusBooking } from "../store/busSlice";

const BookingList = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((store) => store.buses.bookings);

  const deleteHandler = (id) => {
    dispatch(deleteBusBooking({ id }));
  };

  const bookingList = bookings.map((booking) => (
    <div
      className="bg-gray-300 flex items-center justify-between"
      key={booking.id}
    >
      <div>
        <h3 className="font-bold text-lg text-gray-700">{booking.name}</h3>
        <span className="font-normal text-gray-600">{booking.seats}</span>
        <p className="font-normal text-gray-600">{booking.date}</p>
      </div>
      <div>
        <Link to={`edit-booking/${booking.id}`}>
          <Button variant="outline-warning">Edit</Button>
        </Link>
        <Button
          onClick={() => deleteHandler(booking.id)}
          variant="outline-danger"
          className="m-2"
        >
          Delete
        </Button>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <Link to="/add-booking">
        <Button variant="outline-primary" className="mt-5">
          Add New Booking
        </Button>
      </Link>

      <h1 className="mt-2">Booking List</h1>
      <div className="grid gap-5 md:grid-cols-2">
        {bookings.length ? (
          bookingList
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingList;
