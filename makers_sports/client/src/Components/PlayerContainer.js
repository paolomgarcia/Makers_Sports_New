
import PlayerCard from './PlayerCard'


function PlayerContainer({players}) {

    return (
     <div>
         <title>Makers Sports Container</title>
         <p>
             {players.map(player => <PlayerCard  key={player.id} player={player}  />)}
         </p>
     </div>
    );
  }

export default PlayerContainer