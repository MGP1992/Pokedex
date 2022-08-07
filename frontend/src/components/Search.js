
function Search(props) {
    const {pkmnName} = props;
    const handleSubmit = function(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const pkmonSearch = formData.get('pkmnName');
        console.log(pkmnName);
        // pkmnName(pkmonSearch)
    }
    return (

        <form id="searchbar" onSubmit={handleSubmit}>
            <input id="pkmnName" name="pkmnName"placeholder="search" type="search"/>
            <input type="submit" />
        </form>

          
    );
  }
  
  export default Search;

  