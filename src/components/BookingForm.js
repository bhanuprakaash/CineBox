import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import '../styles/Form.css';
const BookingForm = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const {name} = state;
  const storedFormData = localStorage.getItem('bookingFormData');
  const initialFormData = storedFormData ? JSON.parse(storedFormData) : {
    name: '',
    email: '',
    phone: '',
    tickets: 1,
    movie: '',
    date: '',
    time: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('bookingFormData', JSON.stringify(formData));
    // Here, you can send the form data to your backend or do any other necessary processing
    navigate('/');
  };

  return (
    <div className="booking-form-container">
      <h2>Book Tickets for <span style={{color:"rgb(102,103,171)"}}>{name}</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="tickets">Number of Tickets:</label>
          <input type="number" id="tickets" name="tickets" min="1" max="10" value={formData.tickets} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="movieHall">Movie Hall:</label>
          <select id="movieHall" name="movieHall" value={formData.movieHall} onChange={handleInputChange} required>
            <option value="">Select a movie hall</option>
            <option value="Cineplex 1">Cineplex 1</option>
            <option value="Cineplex 2">Cineplex 2</option>
            <option value="AMC 1">AMC 1</option>
            <option value="AMC 2">AMC 2</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
