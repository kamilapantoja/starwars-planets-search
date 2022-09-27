import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContex';

const FilterNumber = () => {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(MyContext);
  const [numberFilter, setNumberFilter] = useState({
    value: 0,
    column: 'population',
    comparison: 'maior que',
  });

  const { value } = numberFilter;
  const buttonFilter = () => {
    const getOptionChecked = document.querySelector('option:checked');
    getOptionChecked.remove();
    setFilterByNumericValues((prevState) => ([
      ...filterByNumericValues,
      {
        ...prevState,
        ...numberFilter,
      }]));
  };

  const filterChange = ({ target }) => {
    setNumberFilter({
      ...numberFilter,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <select
        id="coluna"
        name="column"
        data-testid="column-filter"
        onChange={ filterChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select name="comparison" data-testid="comparison-filter" onChange={ filterChange }>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ filterChange }
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ buttonFilter }
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterNumber;
