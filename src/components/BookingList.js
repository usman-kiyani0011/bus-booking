import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteBusBooking } from "../store/busSlice";
import BusesDetails from "./BusesDetails";

const BookingList = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((store) => store.buses.bookings);
  const deleteHandler = (id) => {
    dispatch(deleteBusBooking({ id }));
  };

  const bookingList = bookings.map((booking) => (
    <div className="bg-gray-300 flex items-center justify-between">
      <div key={booking.id}>
        <h3 className="font-bold text-lg text-gray-700">
          Booking Name: {booking.name}
        </h3>
        <span className="font-normal text-gray-600">
          Seats: {booking.seats}
        </span>
        <p className="font-normal text-gray-600">Date: {booking.date}</p>
        Alloacated Buses:
        {booking.combi1.map((com) => (
          <span className="font-normal pe-2"> {com} </span>
        ))}
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

      <h1 className="mt-5 mb-5">Booking List</h1>
      <div className="grid gap-5 md:grid-cols-2">
        {bookings.length ? (
          bookingList
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No Booking
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingList;
