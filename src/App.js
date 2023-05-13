import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import MovieDetails from './components/MovieDetails';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<MovieDetails/>}/>
        <Route path="/booking-form" element={<BookingForm/>}/>
      </Routes>
    </Router>
  );
}
export default App;
