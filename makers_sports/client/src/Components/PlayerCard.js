import {Link} from 'react-router-dom'

function PlayerCard({player}) {
    const {p_name, p_nationality, image, id} = player
    console.log(player)

    return (
<div class="card text-center shadow-2xl">
      <figure class="px-10 pt-10">
      <img src={image} class="rounded-xl"/>
      </figure>
  <div class="card-body">
      <h2 class="card-title">{p_name}</h2>
      <p>Nationality: {p_nationality}</p>
    <div class="justify-center card-actions">
      <button class="btn btn-outline btn-accent"><Link to={`/players/${id}`}>More Info</Link></button>
    </div>
  </div>
</div>
    )
  }

export default PlayerCard

  {/* // <card style={{background: "green", padding: "5vh", borderRadius: "50px",fontWeight: "bold"}}>
  // <Link to={`/players/${id}`}> <h2 className="cardLink" style={{fontSize: "26px"}}>{p_name}</h2></Link>
  // <img src={image} alt="Error" style={{maxHeight: "50vh", }}/>
  //   <p>Birthday: {p_birthday}</p>
  //   <p>Nationality: {p_nationality}</p>
  //   <p>Height: {height} cm</p>
  //   <p>Weight: {weight} lbs</p>
  //   <p>Position: {position}</p>
  // </card> */}
