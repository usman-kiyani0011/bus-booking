import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addBusBooking } from "../store/busSlice";

const RegForm = () => {
  const dispatch = useDispatch();
  //   const buses = useSelector((state) => state.buses.value);

  const [name, setName] = useState("");
  const [seats, setSeats] = useState(0);
  const [date, setDate] = useState(null);

  const onSubmit = (data) => {
    data.preventDefault();
    dispatch(addBusBooking(data));
    console.log("submited", data);
    console.log("name", name);
    console.log("seats", seats);
    console.log("date", date);
  };

  return (
    <div className="container">
      <Form onSubmit={onSubmit} className="simpleForm">
        <Form.Group className="mb-3">
          <Form.Label>Bus Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter bus name"
            name="busName"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
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

        <Form.Group className="mb-3">
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegForm;
