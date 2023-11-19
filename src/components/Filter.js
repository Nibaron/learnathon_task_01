import React from 'react';


export const Filter = ({ selectedType, handleTypeChange, allPokemons }) => {
  return (
    <div className="mb-4 mt-4 flex justify-center">
      <label htmlFor="typeFilter" className="text-gray-700 mr-2 dark:text-white">
        Filter by Type:
      </label>
      <select
        id="typeFilter"
        onChange={handleTypeChange}
        value={selectedType || ""}
        className="border border-gray-300 rounded-md p-1"
      >
        <option value="">All Types</option>
        {[
          ...new Set(
            allPokemons.flatMap((pokemon) =>
              pokemon.types.map((types) => types.type.name)
            )
          ),
        ].map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

