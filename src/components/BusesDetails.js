import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getBusesList } from "../store/busSlice";

const BusesDetails = () => {
  const allBusesList = useSelector((state) => state.buses.allBuses);
  return (
    <div className="mt-5 mb-5">
      {allBusesList.length ? (
        <div className="bg-gray-300 flex items-center justify-between">
          <h1>Available Buses</h1>
          {allBusesList.map((booking) => (
            <div className="bg-gray-300 flex" key={booking.id}>
              <h5 className="font-bold text-lg text-gray-700">
                {booking.name}
              </h5>
              <span className="font-normal text-gray-600">
                Seats: {booking.seats}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p>Buses are not Available</p>
      )}
    </div>
  );
};

export default BusesDetails;
