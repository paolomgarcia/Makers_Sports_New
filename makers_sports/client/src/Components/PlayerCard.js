import {Link} from 'react-router-dom'

function PlayerCard({player}) {
    const {p_name, p_birthday, p_nationality, height, weight, position, id} = player
    console.log(player)
    return (
      <card>
      <div>
      <Link to={`/players/${id}`}> <h2>{p_name}</h2></Link>
        <p>$ {p_birthday}</p>
        <p>$ {p_nationality}</p>
        <p>$ {height}</p>
        <p>$ {weight}</p>
        <p>$ {position}</p>
      </div>

      </card>

    );
  }

  export default PlayerCard