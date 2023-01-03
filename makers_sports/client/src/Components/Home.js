
import PlayerContainer from './PlayerContainer'

function Home({players}){
    return(
    <div>
        <p>Home Page</p>
        <PlayerContainer players={players} />
    </div>
    )
}

export default Home