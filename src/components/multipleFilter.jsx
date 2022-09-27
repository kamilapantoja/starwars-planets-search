import React, { useContext } from 'react';
import MyContext from '../context/MyContex';

const MultipleFilter = () => {
  const { filterByNumericValues } = useContext(MyContext);
  const addFilter = () => {
    if (filterByNumericValues.lenght > 0) {
      return (
        <ul>
          {filterByNumericValues.map(({
            column,
            comparison,
            value },
          index) => (
            <li key={ index }>
              {`${column} ${comparison} ${value}`}
            </li>
          ))}
        </ul>
      );
    }
    return (<p />);
  };
  return addFilter();
};

export default MultipleFilter;
