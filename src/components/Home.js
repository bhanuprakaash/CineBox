import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  const handleViewDetailsClick = (movieData) => {
    navigate(`/${movieData.name}`, { state: { movieData } });
  };

  return (
    <div className="home">
      <h1>CineBox</h1>
      <ul className="movie-board">
        {data.map((item) => (
          <li key={item.show.id}>
            <div className="movie-details">
              {item.show.image && <img src={item.show.image.original} alt="movie-poster" />}
              <div className="movie-info">
                <div className="movie-rating">
                  <h3>{item.show.name}</h3>
                  <p>
                    {item.show.rating.average} / 10
                  </p>
                </div>
              </div>
              <button onClick={() => handleViewDetailsClick(item.show)}>View Details</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
