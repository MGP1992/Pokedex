function Typecheck(props) {
    function strongAgainst(type) {
        if (type == "Electric") {
            return ("Water, Flying") }

        else if (type == "Water") {
            return ("Fire, Rock, Ground") }
        
        else if (type == "Fire") {
            return ("Grass, Ice, Bug") }
            
        else if (type == "Grass") {
            return ("Water, Rock, Ground") }
            
        else if (type == "Posion") {
            return ("Grass") }

        else if (type == "Normal") {
            return ("Nothing") }
        
        else if (type == "Psychic") {
            return ("Fighting, Poison") }
            
        else if (type == "Ghost") {
            return ("Ghost, Psychic") }
            
        else if (type == "Flying") {
            return ("Grass, Bug, Fighting") }

        else if (type == "Fighting") {
            return ("Normal, Ice, Rock") }
        
        else if (type == "Rock") {
            return ("Fire, FLying, Bug, Ice") }
            
        else if (type == "Ground") {
            return ("Rock, Electric, Fire, Poison") }
            
        else if (type == "Ice") {
            return ("Grass, Ground, Flying, Dragon") }
         
        else if (type == "Bug") {
            return ("Grass, Psychic") }

        else if (type == "Dragon") {
            return ("Dragon") }

        else
            return "invalid type"
    }

    function weakAgainst(type) {
        if (type == "Electric") {
            return ("Ground") }

        else if (type == "Water") {
            return ("Electric, Grass") }
        
        else if (type == "Fire") {
            return ("Water, Ground, Rock") }
            
        else if (type == "Grass") {
            return ("Fire, Ice, Posion") }
            
        else if (type == "Normal") {
            return ("Fighting") }

        else if (type == "Psychic") {
            return ("Bug, Ghost") }
        
        else if (type == "Poison") {
            return ("FLying Bug") }
            
        else if (type == "Ghost") {
            return ("Ghost") }
            
        else if (type == "Flying") {
            return ("Electric, Rock, Ice") }

        else if (type == "Fighting") {
            return ("Psychic, Flying") }
        
        else if (type == "Rock") {
            return ("Water, Grass, Fighting, Ground") }
            
        else if (type == "Ground") {
            return ("Water, Grass, Ice") }
            
        else if (type == "Ice") {
            return ("Fire, FIghting, Rock") }

           
        else if (type == "Bug") {
            return ("Fire, FLying, Rock") }

        else if (type == "Dragon") {
            return ("Dragon, Ice") }

        else
            return "invalid type"
    }

        return (

            <div>
                <h1>Type Matchup</h1>
                <h2>Strong against: {strongAgainst(props.type)}</h2>
                <h2>Weak against: {weakAgainst(props.type)}</h2>

            </div>

            
        );
        }
  
export default Typecheck;