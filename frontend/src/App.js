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
      location: '', 
      id: data.id,
    }


    setInfoData(temp_data);
    setDescription(data.pokemon_descriptions);
    setImage(data.sprites.front_default);
  }
  return (
    <div id="content-container" className="relative">
      <Search pkmnData={pull_pkmnData} />
      <div id="info-container" className="h-10 min-w-0 max-w-1330px">
        <PkmnInfo
          infoData={infoData}
        />
        <PkmnDescription
          description={description}
          image={image}
        />
      </div>
      <Typecheck type={infoData?.type} />
    </div>
  );
}

export default App;