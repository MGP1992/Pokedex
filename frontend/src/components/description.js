import './description.css';

function PkmnDescription(props) {
    return (
      <div id="pkmndescription">
          <img src={props.image}/>
          <p>{props.description}</p>
      </div>         
    );
  }
export default PkmnDescription;