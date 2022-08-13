import './typestyle.css';
import React from "react";

function Typecheck(props) {
    console.log(props.type)
    const strongAgainstArray = [];
    const weakAgainstArray = [];
    typeAffinity(props.type);

    function typeAffinity(type) {
        switch (type) {
            case "electric":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Water, Flying");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Ground");
                break;
            case "water":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Fire, Rock, Ground");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Electric, Grass");
                break;
            case "fire":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Grass, Ice, Bug");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Water, Ground, Rock");
                break;
            case "grass":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Water, Rock, Ground");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Fire, Ice, Poison");
                break;
            case "poison":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Grass");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Flying, Bug");
                break;
            case "normal":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Nothing");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Fighting");
                break;
            case "psychic":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Fighting, Posion");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Bug, Ghost");
                break;
            case "ghost":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Ghost, Psychic");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Ghost");
                break;
            case "flying":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Grass, Bug, Fighting");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Electric, Rock, Ice");
                break;
            case "rock":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Fire, Flying, Bug, Ice");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Water, Grass, Fighting, Ground");
                break;
            case "ground":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Rock, Electric, Fire, Poison");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Water, Grass Ice");
                break;
            case "ice":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Grass, Ground, Flying, Dragon");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Fire, Fighting, Rock");
                break;
            case "bug":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Grass, Psychic");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Fire, Flying, Rock");
                break;  
            case "dragon":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Dragon");
                addTypesToArrayByCommaSepString(weakAgainstArray, "Dragon, Ice");
                break;
            case "fighting":
                addTypesToArrayByCommaSepString(strongAgainstArray, "Normal, Rock, Ice") ;
                addTypesToArrayByCommaSepString(weakAgainstArray, "Flying, Psychic" );             
                break;
            default:
                break;
        }
    }

    function addTypesToArrayByCommaSepString(array, types) {
        const typesToAdd = types.split(',');
        for (const type of typesToAdd) {
            array.push(type)
        }
    }

    
    
    
        return (
          <div id="types">
            <h1>Type Matchup</h1>
            <h2>Strong against: {strongAgainstArray.join(", ")}</h2>
            <h2>Weak against: {weakAgainstArray.join(", ")}</h2>
          </div>
        );
        }
  
export default Typecheck;