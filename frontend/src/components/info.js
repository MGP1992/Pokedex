import _ from 'lodash';

function PkmnInfo(props) {
    const { infoData } = props;
    return (
        <div id="pkmninfo" className="ml-14 mt-8 text-2xl">
            <h1>Pokédex entry: {_.capitalize(infoData?.name)}</h1>
            <h2>Type: {_.capitalize(infoData?.type)}</h2>
            <h2>Height: {infoData?.height}</h2>
            <h2>Weight: {infoData?.weight}</h2>
            <h2>Pokemon location: {infoData?.location}</h2>
        </div>         
    );
  }
export default PkmnInfo;

