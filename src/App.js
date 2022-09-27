import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';
import MyContext from './context/MyContex';
import PlanetsAPI from './helpers/API';
import FilterNumber from './components/FilterNumber';
import MultipleFilter from './components/multipleFilter';

function App() {
  const data = PlanetsAPI();
  const [FilterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: '',
    comparison: '',
    value: '',
  }]);

  const contextData = {
    data,
    FilterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <MyContext.Provider value={ contextData }>
      <FilterNumber />
      <MultipleFilter />
      <Table />
    </MyContext.Provider>
  );
}

export default App;
