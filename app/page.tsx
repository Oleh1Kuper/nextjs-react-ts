import React from 'react';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import CustomFilter from '@/components/CustomFilter';
import ClientApi from '@/utils/clientApi';
import CarCard from '@/components/CarCard';
import { Car } from '@/types/Car';
import { fuels, yearsOfProduction } from '@/constants';
import ShowMore from '@/components/ShowMore';
import { v4 as uuidv4 } from 'uuid';

type SearchParams = {
  searchParams: {
    model: string;
    year: string;
    fuel: string;
    manufacturer: string;
    limit: number;
    pageNumber: number;
  };
};

const Home = async ({ searchParams }: SearchParams) => {
  const cars = await new ClientApi('/v1/cars').getAll<Car>({
    params: {
      fuel_type: searchParams.fuel || '',
      limit: searchParams.limit || 10,
      model: searchParams.model || 'q7',
      year: searchParams.year,
    },
  });

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
              <CustomFilter title="Fuel" options={fuels} />
              <CustomFilter title="Year" options={yearsOfProduction} />
            </div>
          </div>

          <section className="w-full">
            <div className="home__cars-wrapper">
              {cars.length ? (
                cars.map((car) => <CarCard key={uuidv4()} car={car} />)
              ) : (
                <p className="text-primary-blue">No cars with these params</p>
              )}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > cars.length}
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
