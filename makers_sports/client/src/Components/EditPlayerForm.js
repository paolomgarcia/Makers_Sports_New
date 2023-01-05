import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function EditPlayerForm({updatePlayer}) {
  const [formData, setFormData] = useState({
    p_name:'',
    p_birthday:'',
    p_nationality:'',
    height:'',
    weight:'',
    position:'',
    user_id:'',
    organization_id:''
  })
  const [errors, setErrors] = useState([])
  const {id} = useParams()
  useEffect(() => {
    fetch(`/players/${id}`)
    .then(res => res.json())
    .then(setFormData)
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }


  function onSubmit(e){
    e.preventDefault()
    //PATCH to `/players/${id}`
    fetch(`/players/${id}`,{
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    })
    .then(res => {
      if(res.ok){
        res.json().then(updatePlayer)
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }
    return (
      <div className='App'>
      {errors?errors.map(e => <div>{e}</div>):null}
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type='text' name='p_name' value={formData.p_name} onChange={handleChange} />

        <label> Birthday</label>
        <input type='date' name='p_birthday' value={formData.p_birthday} onChange={handleChange} />

        <label>Nationality</label>
        <input type='text' name='p_nationality' value={formData.p_nationality} onChange={handleChange} />

        <label>Height</label>
        <input type='text' name='height' value={formData.height} onChange={handleChange} />

        <label>Weight</label>
        <input type='text' name='weight' value={formData.weight} onChange={handleChange} />

        <label>Position</label>
        <input type='text' name='position' value={formData.position} onChange={handleChange} />

        <input type='submit' value='Update Player' />
      </form>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    )
  }

  export default EditPlayerForm
