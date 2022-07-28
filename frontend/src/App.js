import { useState } from "react";
import Search from "./components/Search";


function App() {
    const [pkmnName] = useState(false)
  return (
    <>
      <Search pkmnName={'string'} />
      <div>{pkmnName}</div>
    </>

  );
}

export default App;