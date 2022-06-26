import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBusBooking } from "../store/busSlice";

const RegForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [seats, setSeats] = useState();
  const [date, setDate] = useState();

  const onSubmit = (data) => {
    data.preventDefault();
    dispatch(addBusBooking(name, seats, date));
    setName("");
    setSeats();
    setDate();
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
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="col-md-3">
          <Form.Label>Seats</Form.Label>
          <Form.Control
            type="number"
            placeholder="Seats"
            name="seats"
            onChange={(e) => {
              setSeats(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="col-md-3">
          <Form.Label>Booking Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter booking date"
            name="date"
            onChange={(e) => {
              setDate(e.target.value);
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

export default RegForm;
