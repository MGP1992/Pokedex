

function PkmnDescription({description, image}) {

  const processedDescription = (description) => description?.replace(/[^a-zA-Z0-9,.' é É]/g, ' ')
  
    return (
      <div id="pkmndescription" className="max-w-md -ml-64 mt-64">
          <img className="w-60 h-60 ml-28" alt="pokemon sprite" src={image}/>
          <p className="mt-16 text-3xl">{processedDescription(description)}</p>
      </div>         
    );
  }
export default PkmnDescription;