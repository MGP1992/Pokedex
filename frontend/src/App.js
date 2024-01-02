import { useState } from "react";
import Search from "./components/Search";
import PkmnInfo from "./components/info";
import Typecheck from "./components/types";
import PkmnDescription from "./components/description";

function App() { //sets up reactive variables with accessors
  const [infoData, setInfoData] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const pull_pkmnData = (data) => {
    console.log(data);
    const temp_data = { 
      name: data.name,
      type: data.types[0].type.name,
      height: data.height,
      weight: data.weight,
      location: data.location_area_encounters ? data.location_area_encounters : 'Cannot catch in Red Version', 
      id: data.id,
    }


    setInfoData(temp_data);
    setDescription(data.pokemon_descriptions);
    setImage(data.sprites.front_default);
  }
  return (
    <div id="content-container" className="relative flex">
      <div id="search-and-entry" className="w-5/12 h-10">
      <Search pkmnData={pull_pkmnData} />
        <PkmnInfo
          infoData={infoData}
        />
      <Typecheck type={infoData?.type} />
      </div>
      <div id="sprite-and-description" className="relative">
        <PkmnDescription
          description={description}
          image={image}
        />
      </div>
    </div>
  );
}

export default App;