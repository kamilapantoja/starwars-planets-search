import { useEffect, useState } from 'react';

const PlanetsAPI = () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanet = async () => {
      const response = await fetch(endpoint);
      const planets = await response.json();
      setData(planets.results);
    };
    getPlanet();
  }, []);
  return data;
};

export default PlanetsAPI;
