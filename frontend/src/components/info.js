import _ from 'lodash';

function PkmnInfo(props) {
    const { infoData } = props;
    return (
        <div id="pkmninfo" className="ml-14 mt-8 text-2xl max-w-lg">
            <h1>Pokédex entry: {_.capitalize(infoData?.name)}</h1>
            <h2>Type: {_.capitalize(infoData?.type)}</h2>
            <h2>Height: {infoData?.height? `${(infoData?.height/10)}m`:''}</h2>
            <h2>Weight: {infoData?.weight? `${(infoData?.weight/10)}kg`:''}</h2>
            <h2>Pokemon location: {_.capitalize(infoData?.location.replace(/-/g, ' '))}</h2>
        </div>         
    );
  }
export default PkmnInfo;

