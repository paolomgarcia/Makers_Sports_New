
import PlayerContainer from './PlayerContainer'

function Home({players}){
    console.log(players)
    return(
    <div>
        <p>Home Page</p>
        <PlayerContainer players={players} />
    </div>
    )
}

export default Home