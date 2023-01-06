import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
// import {Form} from '../styled/Form'

function Login({updateUser}) {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {name, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name,
            password
        }
       console.log(user)
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    history.push(`/`)
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
        <div class="form-control">
        <label class="label">
        <span class="label-text">Agent Sign In</span>
        </label>
        <form style={{fontWeight: "bold", flex: 1, flexDirection: "row",justifyContent: "center",}} onSubmit={onSubmit}>
        <input placeholder="username" type='text' name='name' value={name} onChange={handleChange} />
        <input placeholder="password" type='password' name='password' value={password} onChange={handleChange} />
        <input className="btn btn-primary" type='submit' value='Log In!' />
        </form>
        {errors? <div>{errors}</div>:null}
        </div>
        )
        }

export default Login

