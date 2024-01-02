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
      pkmnData(mergedData); 

    }

    const findVersionLocation = function(location_area_encounters) {
      for (const entry of location_area_encounters) {
        for (const version of entry.version_details) {
            if (version.version.name === "red") {
              return(entry.location_area.name)
          }
        }
  }
}

    const findVersionFlavourText = function(pokemon_species_data) {
      for (const entry of pokemon_species_data.flavor_text_entries) {

        if (entry.version.name ==="red") {
          return entry.flavor_text;
        }

      }

    }
    return (
      <div className='mt-72 ml-40'>
        <form id="searchbar" onSubmit={handleSubmit}>
          <input
            id="pkmnName"
            name="pkmnName"
            placeholder="search"
            type="search"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
          />
          <input type="submit" className="ml-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:red-blue-600"/>
        </form>
        </div>
    );
  }


  
  export default Search;

  