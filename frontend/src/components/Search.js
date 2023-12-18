import './searchstyle.css';
import axios from 'axios';


function Search(props) {
  const { pkmnData } = props;
    const handleSubmit = async function(event) {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const pkmnSearch = formData.get('pkmnName');
      const { data } = await axios.get(`http://localhost:3001/pokemon/${pkmnSearch}`);
      const locCall = await axios.get(data.location_area_encounters);
      const descriptionData = await axios.get(`http://localhost:3001/pokemon/${data.id}/description`);
      const genOneLocations = findVersionLocation(locCall.data);
      const genOneFlavourText = findVersionFlavourText(descriptionData.data)
      const mergedData = {...data, location_area_encounters: genOneLocations, pokemon_descriptions: genOneFlavourText};
      pkmnData(mergedData); //assignment

    }
    //pass in the array
    const findVersionLocation = function(location_area_encounters) {

    }

    const findVersionFlavourText = function(pokemon_species_data) {
      for (const entry of pokemon_species_data.flavor_text_entries) {

        if (entry.version.name ==="red") {
          return entry.flavor_text; // need to fix weird arrow problem (iterate through string etc)
        }

      }

    }
    return (
        <form id="searchbar" onSubmit={handleSubmit}>
          <input
            id="pkmnName"
            name="pkmnName"
            placeholder="search"
            type="search"
          />
          <input type="submit" />
        </form>
    );
  }
  
  export default Search;

  