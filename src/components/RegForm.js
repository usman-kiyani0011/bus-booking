import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBusBooking } from "../store/busSlice";
import BusesDetails from "./BusesDetails";

const RegForm = () => {
  function getSum(total, num) {
    return total + Math.round(num);
  }
  var combi = [];

  var temp = [];

  var results = [];
  var combi1 = [];

  var i = 0;

  function getCombinations(valuesArray) {
    var slent = Math.pow(2, valuesArray.length);

    for (var i = 0; i < slent; i++) {
      temp = [];

      for (var j = 0; j < valuesArray.length; j++) {
        if (i & Math.pow(2, j)) {
          temp.push(valuesArray[j]);
        }
      }

      if (temp.length > 0) {
        combi.push(temp);
      }
    }

    combi.sort((a, b) => a.length - b.length);

    // console.log(combi);
    for (let i = 0; i < combi.length; i++) {
      results.push(combi[i].reduce(getSum, 0));

      // console.log("array", combi[i]);
    }
    // console.log("result", results);
  }
  function getCombinationsString(valuesArray) {
    var temp1 = [];

    var slent = Math.pow(2, valuesArray.length);

    for (var i = 0; i < slent; i++) {
      temp1 = [];

      for (var j = 0; j < valuesArray.length; j++) {
        if (i & Math.pow(2, j)) {
          temp1.push(valuesArray[j]);
        }
      }

      if (temp1.length > 0) {
        combi1.push(temp1);
      }
    }

    combi1.sort((a, b) => a.length - b.length);

    // console.log(combi);
    for (let i = 0; i < combi1.length; i++) {
      // console.log("array", combi1[i]);
    }
  }

  // variable "results" stores an array with arrays string type

  getCombinations([5, 2, 8, 8, 2]);
  getCombinationsString(["A", "B", "C", "D", "E"]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [buses, setBusess] = useState([]);
  const [input, setInput] = useState();
  const [name, setName] = useState("");
  const [seats, setSeats] = useState();
  const [date, setDate] = useState();

  function getResults() {
    let input1 = input;
    for (i = 0; i < combi.length; i++) {
      if (Number(input1) === results[i]) {
        console.log("Array found", combi[i], "String", combi1[i]);
        setBusess(combi1[i]);
        console.log("buses", buses);
        return combi[i];
      }
    }
    for (i = 0; i < combi.length; i++) {
      if (Number(input1) + 1 === results[i]) {
        console.log("Array found2", combi[i], "String", combi1[i]);
        return combi[i];
      }
    }
    for (i = 0; i < combi.length; i++) {
      if (Number(input) + 1 === results[i]) {
        console.log("Array foun3", combi[i], "String", combi1[i]);
        return combi[i];
      }
    }
  }
  const onSubmit = (data) => {
    data.preventDefault();
    getResults();
    dispatch(addBusBooking(name, seats, date, combi1[i]));
    setName("");
    setSeats();
    setDate();
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1>Booking </h1>
      <Form onSubmit={onSubmit} className="simpleForm">
        <Form.Group className="col-md-3">
          <Form.Label>Booking Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter booking name"
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
              setInput(e.target.value);
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

      <BusesDetails />
    </div>
  );
};

export default RegForm;
