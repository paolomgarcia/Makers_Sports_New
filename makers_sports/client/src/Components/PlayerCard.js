import {Link} from 'react-router-dom'

function PlayerCard({player}) {
    const {p_name, p_birthday, p_nationality, height, weight, position, id} = player
    console.log(player)
    return (

      <div>
      <Link to={`/players/${id}`}> <h2>Name: {p_name}</h2></Link>
        <p>Birthday: {p_birthday}</p>
        <p>Nationality: {p_nationality}</p>
        <p>Height: {height} cm</p>
        <p>Weight: {weight} lbs</p>
        <p>Position: {position}</p>
      </div>

    );
  }

  export default PlayerCard