
import PlayerContainer from './PlayerContainer'

function Home({players}){
    console.log(players)
    return(
    <div>
        <p>Maker's Team:</p>
        <PlayerContainer players={players} />
    </div>
    )
}

export default Home