# POKEMON World Leanathon 2.0 Project

This is a simple ReactJS project that fetches and displays data from a REST API. The project allows users to interact with data from the following APIs:

- [PokeAPI](https://pokeapi.co/docs/v2)

## Features

1. **Basic Folder Structure:** The project follows a `PokemonCard` component to show Cards.

2. **Data Fetching:**
   - The application fetches 30 Pokemon objects from PokeAPI using `Axios`.
   - Then Stores data inside `allPokemons` State.

4. **Show Data Results:** Fetched data is displayed in the PokemonCard using Props Drilling of `Name`, `Image` and `Types`.

5. **Error and Loading States:** The UI displays
   - `Loading Skeleton Component` while Loading fetched data and
   - displays `Error Skeleton Component`  while Error fetching data.

7. **Dropdown Filter:** Users can filter `Pokemon Types` using a simple dropdown. if no value is set, allTypes of Pokemon is shown.

8. **CSS Styling:** The components are styled using `Tailwind CSS`.
