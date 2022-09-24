import './infostyle.css';

function PkmnInfo(props) {
    const { infoData } = props;
    return (
        <div id="pkmninfo">
            <h1>Pokédex entry: {infoData?.name}</h1>
            <h2>Type: {infoData?.type}</h2>
            <h2>Height: {infoData?.height}</h2>
            <h2>Weight: {infoData?.weight}</h2>
            <h2>Pokemon location: {infoData?.location}</h2>
        </div>         
    );
  }
export default PkmnInfo;