import React from 'react';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import CustomFilter from '@/components/CustomFilter';
import ClientApi from '@/utils/clientApi';
import CarCard from '@/components/CarCard';
import { Car } from '@/types/Car';

const Home = async () => {
  const cars = await new ClientApi('/v1/cars').getAll<Car>({
    params: { model: 'corolla' },
  });

  console.log(cars);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h2 className="text-4xl">Car Catalogue</h2>
          <p>Explore out cars you might like</p>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter />
              <CustomFilter />
            </div>
          </div>

          <section>
            <div className="home__cars-wrapper">
              {cars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
