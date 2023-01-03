import React, { useState} from 'react'
// import {Form} from '../styled/Form'


function PlayerForm({addPlayer}) {
  const [formData, setFormData] = useState({
    p_name:'',
    p_birthday:'',
    p_nationality:'',
    height:'',
    weight:'',
    position:''
  })
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
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
        <label>Title </label>
        <input type='text' name='name' value={formData.p_name} onChange={handleChange} />

        <label> Genre</label>
        <input type='text' name='birthday' value={formData.p_birthday} onChange={handleChange} />

        <label>Budget</label>
        <input type='number' name='nationality' value={formData.p_nationality} onChange={handleChange} />

        <label>Image</label>
        <input type='text' name='height' value={formData.height} onChange={handleChange} />

        <label>Director</label>
        <input type='text' name='weight' value={formData.weight} onChange={handleChange} />

        <label>Description</label>
        <textarea type='text' rows='4' cols='50' name='position' value={formData.position} onChange={handleChange} />

        <input type='submit' value='Update Player' />
      </form>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    )
  }

  export default PlayerForm

