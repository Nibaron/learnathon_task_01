# POKEMON World Leanathon 2.0 Project
![image](https://github.com/Nibaron/learnathon_task_01/assets/36547410/ad3493eb-560e-4374-b781-a9b9aa2f0fd3)
This is a simple ReactJS project that fetches and displays data from a REST API.
## HOW to RUN
1. Vercel Live Link
* [Pokemon World](https://pokemon-api-learnathon.vercel.app/)
2. Git Clone 
* First clone the Repo using `git clone https://github.com/Nibaron/learnathon_task_01.git`
*  install npm script using `npm install`
*   then `npm start` to start 

Your app is ready to GO !

The project allows users to interact with data from the following APIs:
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


