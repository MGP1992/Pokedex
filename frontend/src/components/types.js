import React from "react";


function Typecheck(props) {
  const { type } = props;

  const typeMatchups = {
    electric: { strongAgainst: ["Water", "Flying"], weakAgainst: ["Ground"] },
    water: { strongAgainst: ["Fire", "Rock", "Ground"], weakAgainst: ["Electric", "Grass"] },
    fire: { strongAgainst: ["Grass", "Ice", "Bug"], weakAgainst: ["Water", "Ground", "Rock"] },
    grass: { strongAgainst: ["Water", "Rock", "Ground"], weakAgainst: ["Fire", "Ice", "Poison"] },
    poison: { strongAgainst: ["Grass"], weakAgainst: ["Flying", "Bug"] },
    normal: { strongAgainst: ["Nothing"], weakAgainst: ["Fighting"] },
    psychic: { strongAgainst: ["Fighting", "Poison"], weakAgainst: ["Bug", "Ghost"] },
    ghost: { strongAgainst: ["Ghost", "Psychic"], weakAgainst: ["Ghost"] },
    flying: { strongAgainst: ["Grass", "Bug", "Fighting"], weakAgainst: ["Electric", "Rock", "Ice"] },
    rock: { strongAgainst: ["Fire", "Flying", "Bug", "Ice"], weakAgainst: ["Water", "Grass", "Fighting", "Ground"] },
    ground: { strongAgainst: ["Rock", "Electric", "Fire", "Poison"], weakAgainst: ["Water", "Grass", "Ice"] },
    ice: { strongAgainst: ["Grass", "Ground", "Flying", "Dragon"], weakAgainst: ["Fire", "Fighting", "Rock"] },
    bug: { strongAgainst: ["Grass", "Psychic"], weakAgainst: ["Fire", "Flying", "Rock"] },
    dragon: { strongAgainst: ["Dragon"], weakAgainst: ["Dragon", "Ice"] },
    fighting: { strongAgainst: ["Normal", "Rock", "Ice"], weakAgainst: ["Flying", "Psychic"] },
    empty: { strongAgainst: [""], weakAgainst: [""] }
  };

  const { strongAgainst, weakAgainst } = typeMatchups[type] || typeMatchups.empty;

  return (
    <div id="types" className="ml-14 mt-20 text-2xl">
      <h1>Type Matchup</h1>
      <h2>Strong against: {strongAgainst.join(", ")}</h2>
      <h2>Weak against: {weakAgainst.join(", ")}</h2>
    </div>
  );
}

export default Typecheck;
