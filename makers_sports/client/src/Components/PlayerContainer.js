
import PlayerCard from './PlayerCard'


function PlayerContainer({players}) {

    return (
     <div>
         <h1></h1>
         <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "5rem"}}>
             {players.map(player => <PlayerCard  key={player.id} player={player}  />)}
         </div>
     </div>
    );
  }

export default PlayerContainer