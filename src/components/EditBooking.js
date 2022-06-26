import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateBooking } from "../store/busSlice";

const EditBooking = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.buses.bookings);
  const existingBookings = bookings.filter((bus) => bus.id === params.id);
  const { name, seats, date } = existingBookings[0];

  const [newName, setNewName] = useState(name);
  const [newSeats, setNewSeats] = useState(seats);
  const [newDate, setNewDate] = useState(date);

  const onSubmit = (data) => {
    data.preventDefault();
    let body = {
      id: params.id,
      name: newName,
      seats: newSeats,
      date: newDate,
    };

    dispatch(updateBooking(body));
    setNewName("");
    setNewSeats();
    setNewDate();
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <Form onSubmit={onSubmit} className="simpleForm">
        <Form.Group className="col-md-3">
          <Form.Label>Bus Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter bus name"
            name="name"
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="col-md-3">
          <Form.Label>Seats</Form.Label>
          <Form.Control
            type="number"
            placeholder="Seats"
            name="seats"
            value={newSeats}
            onChange={(e) => {
              setNewSeats(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="col-md-3">
          <Form.Label>Booking Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter booking date"
            name="date"
            value={newDate}
            onChange={(e) => {
              setNewDate(e.target.value);
            }}
          />
        </Form.Group>
        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditBooking;
