import { useState } from "react";
import Search from "./components/Search";
import Pkmninfo from "./components/info";
import Typecheck from "./components/types";
import './../src/indexstyle.css';


function App() {
    const [pkmnName] = useState(false)
  return (
    <>
      <Search pkmnName={'string'} />
      <div>{pkmnName}</div>
      <Pkmninfo name="Zapdos" type="Electric" height="1.6m" weight="52.6kg" location="Cerulean city power plant"
      description="Zapdos is a large, avian Pokémon with predominantly yellow plumage. It has small, triangular eyes with black around them and a long, thin, light orange beak. Its wings and tail are a mass of spiky feathers and there are black feathers covering the back of its wings and inner tail feathers. A large crest of spiked feathers surrounds its head. Its thighs are tan, and it has thin, light orange legs. It has feet with three forward-facing toes and one backward-facing toe; each toe has a short talon.
      When Zapdos flaps its glittering wings, it releases electricity that can potentially cause thunderstorms. It produces massive crackling and snapping sounds when it flies; these are attributed to the lightning bolts it sheds when airborne. Zapdos reportedly appears only during thunderstorms and gains power when struck by lightning. It is said to live among thunderclouds, but it is rarely seen."
      />
      <Typecheck type="Electric"/>
    </>

  );
}

export default App;