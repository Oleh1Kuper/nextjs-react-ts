import React from 'react';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';

const Home = () => (
  <main className="overflow-hidden">
    <Hero />

    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h2 className="text-4xl">Car Catalogue</h2>
        <p>Explore out cars you might like</p>

        <div className="home__filters">
          <SearchBar />
        </div>
      </div>
    </div>
  </main>
);

export default Home;
