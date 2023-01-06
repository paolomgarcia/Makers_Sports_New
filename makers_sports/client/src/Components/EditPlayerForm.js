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
    image:'',
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
      <div class="form-control">
      {errors?errors.map(e => <div>{e}</div>):null}
    <label class="label">
      <span class="label-text">Add Player Form</span>
    </label>
    <form style={{fontWeight: "bold", flex: 1, flexDirection: "vertical",justifyContent: "center",}} onSubmit={onSubmit}>
    <input class="input input-bordered" placeholder='name...' type='text' name='p_name' value={formData.p_name} onChange={handleChange} />
    <input class="input input-bordered" type='date' name='p_birthday' value={formData.p_birthday} onChange={handleChange} />
    <input class="input input-bordered" placeholder='nationality...' type='text' name='p_nationality' value={formData.p_nationality} onChange={handleChange} />
    <input class="input input-bordered" placeholder='height...' type='text' name='height' value={formData.height} onChange={handleChange} />
    <input class="input input-bordered" placeholder='weight...' type='text' name='weight' value={formData.weight} onChange={handleChange} />
    <input class="input input-bordered" placeholder='position...' type='text' name='position' value={formData.position} onChange={handleChange} />
    <input class="input input-bordered" placeholder='image url...' type='text' name='image' value={formData.image} onChange={handleChange} />
    <input class="input input-bordered" placeholder='user ID...' type='text' name='user_id' value={formData.user_id} onChange={handleChange} />
    <input class="input input-bordered" placeholder='organization ID...'type='text' name='organization_id' value={formData.organization_id} onChange={handleChange} />
    <input className="btn btn-primary" type='submit' value='Add Player' />
    </form>
    {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
  </div>
  )
}

  export default EditPlayerForm



