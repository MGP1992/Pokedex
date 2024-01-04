import { useState } from "react";
import Switch from '@mui/material/Switch';
import Search from "./components/Search";
import PkmnInfo from "./components/info";
import Typecheck from "./components/types";
import PkmnDescription from "./components/description";

function App() {
  const [infoData, setInfoData] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [shinyImage, setShinyImage] = useState();
  const [isShiny, setIsShiny] = useState(false);

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
    setShinyImage(data.sprites.front_shiny);
  }

  return (
    <>
    <div id="content-container" className="relative flex">
      <div id="search-and-entry" className="w-5/12 flex flex-col">
      
      <Search  pkmnData={pull_pkmnData} />
      <PkmnInfo infoData={infoData} />
      <Typecheck type={infoData?.type} />
      {image && <button className=" ml-72 mt-14 w-16 text-xl p-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:red-blue-600" onClick={()=>setIsShiny(!isShiny)}>Shiny</button>}
      </div>
      <div id="sprite-and-description" className="relative">
        <PkmnDescription
          description={description}
          image={!isShiny?image:shinyImage}
        />
      </div>
    </div>
    </>
  );
}

export default App;