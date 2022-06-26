import "./App.css";
import BookingList from "./components/BookingList";
import { Routes, Route } from "react-router-dom";
import RegForm from "./components/RegForm";
import EditBooking from "./components/EditBooking";

function App() {
  
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<BookingList />} />
        <Route path="/add-booking" element={<RegForm />} />
        <Route path="/edit-booking/:id" element={<EditBooking />} />
      </Routes>
    </div>
  );
}

export default App;
