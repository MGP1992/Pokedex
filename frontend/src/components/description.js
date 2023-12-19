
function PkmnDescription(props) {
    return (
      <div id="pkmndescription" className='mt-40 -mr-6'>
          <img src={props.image}/>
          <p>{props.description}</p>
      </div>         
    );
  }
export default PkmnDescription;