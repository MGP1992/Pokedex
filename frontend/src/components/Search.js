import './searchstyle.css';
import axios from 'axios';


function Search(props) {
  const { pkmnData } = props;
    const handleSubmit = async function(event) {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const pkmnSearch = formData.get('pkmnName');
      const { data } = await axios.get(`http://localhost:3001/pokemon/${pkmnSearch}`);
      pkmnData(data);
    }
    return (
        <form id="searchbar" onSubmit={handleSubmit}>
          <input
            id="pkmnName"
            name="pkmnName"
            placeholder="search"
            type="search"
          />
          <input type="submit" />
        </form>
    );
  }
  
  export default Search;

  