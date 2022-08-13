import { useState } from "react";
import Search from "./components/Search";
import PkmnInfo from "./components/info";
import Typecheck from "./components/types";
import PkmnDescription from "./components/description";
import './../src/indexstyle.css';

function App() {
  const [infoData, setInfoData] = useState();

  const pull_pkmnData = (data) => {
    const temp_data = { 
      name: data.name,
      type: data.types[0].type.name,
      height: data.height,
      weight: data.weight,
      location: '',
      id: data.id,
    }
    setInfoData(temp_data);
  }
  return (
    <div id="content-container">
      <Search pkmnData={pull_pkmnData} />
      <div id="info-container">
        <PkmnInfo
          infoData={infoData}
        />
        <PkmnDescription
          description="Zapdos is a large, avian Pokémon with predominantly yellow plumage. It has small, triangular eyes with black around them and a long, thin, light orange beak. Its wings and tail are a mass of spiky feathers and there are black feathers covering the back of its wings and inner tail feathers. A large crest of spiked feathers surrounds its head. Its thighs are tan, and it has thin, light orange legs. It has feet with three forward-facing toes and one backward-facing toe; each toe has a short talon.
      When Zapdos flaps its glittering wings, it releases electricity that can potentially cause thunderstorms. It produces massive crackling and snapping sounds when it flies; these are attributed to the lightning bolts it sheds when airborne. Zapdos reportedly appears only during thunderstorms and gains power when struck by lightning. It is said to live among thunderclouds, but it is rarely seen."
        />
      </div>
      <Typecheck type={infoData?.type} />
    </div>
  );
}

export default App;