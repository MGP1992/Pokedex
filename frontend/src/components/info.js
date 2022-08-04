function Pkmninfo(props) {
    
    return (

        <div>
            <h1>Pokedex entry: {props.name}</h1>
            <h2>Type: {props.type}</h2>
            <h2>Height: {props.height}</h2>
            <h2>Weight: {props.weight}</h2>
            <h2>Pokemon location: {props.location}</h2>
            <p>{props.description}</p>

        </div>

          
    );
  }
export default Pkmninfo;