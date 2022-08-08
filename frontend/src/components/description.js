import './description.css';

function PkmnDescription(props) {
    return (
      <div id="pkmndescription">
          <img src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47c0f4xbmmfysfci3gesl4zw7c1r6eye8wv1f1ie6k&rid=giphy.gif&ct=g" width="200px"/>
          <p class="large-font">{props.description}</p>
      </div>         
    );
  }
export default PkmnDescription;