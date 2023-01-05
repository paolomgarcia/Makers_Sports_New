import React, { useState} from 'react'
// import {Form} from '../styled/Form'


function PlayerForm({addPlayer}) {
  const [formData, setFormData] = useState({
    p_name:'',
    p_birthday:'',
    p_nationality:'',
    height:'',
    weight:'',
    position:'',
    user_id:'',
    organization_id:'',
  })
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }

  function onSubmit(e){
    e.preventDefault()

    fetch('/players',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({...formData, ongoing:true})
    })
    .then(res => {
      if(res.ok){
        res.json().then(addPlayer)
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }



    return (
      <div>
      {errors?errors.map(e => <div>{e}</div>):null}
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type='text' name='p_name' value={formData.p_name} onChange={handleChange} />

        <label>Birthday</label>
        <input type='date' name='p_birthday' value={formData.p_birthday} onChange={handleChange} />

        <label>Nationality</label>
        <input type='text' name='p_nationality' value={formData.p_nationality} onChange={handleChange} />

        <label>Height</label>
        <input type='text' name='height' value={formData.height} onChange={handleChange} />

        <label>Weight</label>
        <input type='text' name='weight' value={formData.weight} onChange={handleChange} />

        <label>Position</label>
        <textarea type='text' name='position' value={formData.position} onChange={handleChange} />

        <label>User ID</label>
        <textarea type='text' name='user_id' value={formData.user_id} onChange={handleChange} />

        <label>Organization ID</label>
        <textarea type='text' name='organization_id' value={formData.organization_id} onChange={handleChange} />

        <input type='submit' value='Add Player' />
      </form>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    )
  }

  export default PlayerForm

