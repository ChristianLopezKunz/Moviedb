import React from 'react';
import movie_black2 from '../assets/Image/movie_black2.jpg'

const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Welcome to the Landing Page for React-Router Basic!</h1>
    <p><img className="img-fluid" src={movie_black2} alt="moviename" style={{ display: 'block', margin: '0 auto' }} /></p>
  </div>
);

export default Home;