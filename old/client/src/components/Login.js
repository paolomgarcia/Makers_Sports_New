import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
// import {Form} from '../styled/Form'

function Login({updateUser}) {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const [signup, setSignup] = useState(false)
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {name, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name,
            password
        }

        let url = `/login`
        if(signup) url = '/users'
        // Logs in user
        fetch(url,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    history.push(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
    <div>
        <form onSubmit={onSubmit}>
        <label>
          Username
          </label>
        <input type='text' name='name' value={name} onChange={handleChange} />

        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />

        <input type='submit' value='Log in!'/>
        <input type='submit' onClick={() => setSignup(true)} value='Sign up!'/>
      </form>
      {errors? <div>{errors}</div>:null}
      </div>
    )
}

export default Login