function PkmnInfo(props) {
    const { infoData } = props;
    return (
        <div id="pkmninfo" className="ml-14 mt-8 text-2xl">
            <h1>Pokédex entry: {infoData?.name}</h1>
            <h2>Type: {infoData?.type}</h2>
            <h2>Height: {infoData?.height}</h2>
            <h2>Weight: {infoData?.weight}</h2>
            <h2>Pokemon location: {infoData?.location}</h2>
        </div>         
    );
  }
export default PkmnInfo;

