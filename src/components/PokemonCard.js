import React from 'react';

export const PokemonCard = ({ id, image, name, types }) => {
  return (
    <div className="card relative bg-white p-4 rounded-lg shadow-lg">
      <div className="text-sm mb-2">
        <small className="text-gray-600 text-bold">#{id}</small>
      </div>
      <img src={image} alt={name} className="mx-auto mb-2 h-32 object-contain" />
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <div className="my-2 flex flex-wrap gap-2 justify-center">
        <div className="text-gray-600 text-lg">Type: </div>
          {types.map((type, index) => (
            <span
              className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
              key={index}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
