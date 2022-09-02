import './description.css';

function PkmnDescription(props) {
    return (
      <div id="pkmndescription">
          <img src = "https://c.tenor.com/p6qNTB18vuUAAAAM/zapdos-flying.gif" width="200px"/>
          <p>{props.description}</p>
      </div>         
    );
  }
export default PkmnDescription;