import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getBusesList } from "../store/busSlice";

const BusesDetails = () => {
  const allBusesList = useSelector((state) => state.buses.allBuses);
  return (
    <div className="mt-5 mb-5">
      {allBusesList.length ? (
        <div>
          <h1>Available Buses</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Bus Name</th>
                <th>Seats</th>
              </tr>
            </thead>
            <tbody>
              {allBusesList.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.name}</td>
                  <td>Seats: {booking.seats}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <p>Buses are not Available</p>
      )}
    </div>
  );
};

export default BusesDetails;
