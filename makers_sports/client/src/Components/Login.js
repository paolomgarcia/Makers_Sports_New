import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Form} from '../styled/Form'

function Login({updateAgent}) {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const [signup, setSignup] = useState(false)
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {name, email, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const agent = {
            name,
            email,
            password
        }

        let url = `/login`
        if(signup) url = '/agents'
        // Logs in agent
        fetch(url,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(agent)
        })
        .then(res => {
            if(res.ok){
                res.json().then(agent => {
                    updateAgent(agent)
                    history.push(`/agents/${agent.id}`)
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
        <>
        <Form onSubmit={onSubmit}>
        <label>
          Name
          </label>
        <input type='text' name='name' value={name} onChange={handleChange} />

        <label>
          Email
          </label>
        <input type='text' name='email' value={email} onChange={handleChange} />

        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />

        <input type='submit' value='Log in!'/>
        <input type='submit' onClick={() => setSignup(true)} value='Sign up!'/>
      </Form>
      {errors? <div>{errors}</div>:null}
        </>
    )
}

export default Login;
