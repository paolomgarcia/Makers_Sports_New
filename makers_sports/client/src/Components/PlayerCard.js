import {Link} from 'react-router-dom'

function PlayerCard({player}) {
    const {p_name, p_birthday, p_nationality, height, weight, position, image, id} = player
    console.log(player)
    return (

      <card style={{background: "green", padding: "5vh", borderRadius: "50px",fontWeight: "bold"}}>
      <Link to={`/players/${id}`}> <h2 className="cardLink" style={{fontSize: "26px"}}>{p_name}</h2></Link>
      <img src={image} alt="Error" style={{maxHeight: "50vh", }}/>
        <p>Birthday: {p_birthday}</p>
        <p>Nationality: {p_nationality}</p>
        <p>Height: {height} cm</p>
        <p>Weight: {weight} lbs</p>
        <p>Position: {position}</p>
      </card>

    );
  }

  export default PlayerCard