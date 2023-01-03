import {Link} from 'react-router-dom'

function PlayerCard({player}) {
    const {p_name, p_birthday, p_nationality, height, weight, position, id} = player
    console.log(player)
    return (

      <div>
      <Link to={`/players/${id}`}> <h2>{p_name}</h2></Link>
        <p>{p_birthday}</p>
        <p>{p_nationality}</p>
        <p>{height} cm</p>
        <p>{weight} lbs</p>
        <p>{position}</p>
      </div>

    );
  }

  export default PlayerCard