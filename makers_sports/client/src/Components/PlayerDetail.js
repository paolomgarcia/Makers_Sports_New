import  { Link, useParams, useHistory } from 'react-router-dom'
import {useEffect, useState} from 'react'
// import styled from 'styled-components'

function PlayerDetail({deletePlayer}) {
  const [player, setPlayer] = useState({})
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)

  const params = useParams()
  const history = useHistory()

  useEffect(()=>{
    //GET to '/players/:id'
    fetch(`/players/${params.id}`)
    .then(res => {
      if(res.ok){
        res.json().then(data => {
          setPlayer(data)
          setLoading(false)
        })
      } else {
        console.log('error')
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])

  function handleDelete(){
    //DELETE to `/players/${params.id}`
    fetch(`/players/${params.id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
        deletePlayer(id)
        history.push('/')
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }

  if(loading) return <h1>Loading</h1>
  if(errors) return <h1>{errors}</h1>


  const {id, p_name, p_birthday, p_nationality, height, weight, position, image} = player
  console.log(player);

  //Place holder data, will be replaced in the assosiations lecture.
  // const crew_members = ['Lily-Mai Harding', 'Cathy Luna', 'Tiernan Daugherty', 'Giselle Nava', 'Alister Wallis', 'Aishah Rowland', 'Keiren Bernal', 'Aqsa Parrish', 'Daanyal Laing', 'Hollie Haas']
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Error Loading" /></figure>
    <div className="card-body">
      <h2 className="card-title">{p_name}</h2>
      <p>Birthday: {p_birthday}</p>
      <p>Nationality: {p_nationality}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Position: {position}</p>
      <div className="card-actions justify-end">
      <button><Link className="btn btn-primary" to={`/players/${id}/edit`}>Edit Player</Link></button>
      <button className="btn btn-primary" onClick={handleDelete}>Delete Player</button>
      </div>
    </div>
  </div>
    )
  }


  export default PlayerDetail

