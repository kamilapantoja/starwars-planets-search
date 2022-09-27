import React, { useContext } from 'react';
import MyContext from '../context/MyContex';

const Table = () => {
  const { data,
    FilterByName,
    filterByNumericValues,
    setFilterByName } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilterByName(value);
  };

  const filterName = data.filter((element) => element.name.includes(FilterByName));

  let filterNumber = filterName;
  filterByNumericValues.forEach((filter) => {
    filterNumber = filterNumber.filter((element) => {
      const {
        column,
        comparison,
        value,
      } = filter;

      switch (comparison) {
      case 'maior que':
        return Number(element[column]) > Number(value);
      case 'menor que':
        return Number(element[column]) < Number(value);
      case 'igual a':
        return Number(element[column]) === Number(value);
      default:
        return true;
      }
    });
  });

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="filter"
        onChange={ handleChange }
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { data !== []
                && data.filter((planet) => planet.name.includes(FilterByName))
                && filterNumber
                  .map((planet) => (
                    <tr key={ planet.name }>
                      <td>{ planet.name }</td>
                      <td>{ planet.rotation_period }</td>
                      <td>{ planet.orbital_period }</td>
                      <td>{ planet.diameter }</td>
                      <td>{ planet.climate }</td>
                      <td>{ planet.gravity }</td>
                      <td>{ planet.terrain }</td>
                      <td>{ planet.surface_water }</td>
                      <td>{ planet.population }</td>
                      <td>{ planet.films }</td>
                      <td>{ planet.created }</td>
                      <td>{ planet.edited }</td>
                      <td>{ planet.url }</td>
                    </tr>
                  )) }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
