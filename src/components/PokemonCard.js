import React from "react";

export const PokemonCard = ({ id, image, name, types, selectedType }) => {
  return (
    <div className="card relative bg-slate-200 p-4 rounded-lg transition-transform transform-glow-hover hover:scale-105 shadow-xl">
      <div className="text-sm mb-2">
        <small className="text-gray-600 text-bold">#{id}</small>
      </div>
      <img
        src={image}
        alt={name}
        className="mx-auto mb-2 h-32 object-contain"
      />
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <div className="my-2 flex flex-wrap gap-2 justify-center">
          <div className="text-gray-600 text-lg">Type: </div>
          {types.map((type, index) => (
            <span
              className={`inline-flex items-center rounded-md ${
                type.type.name === selectedType ? "bg-red-200" : "bg-red-50"
              } px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10`}
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
