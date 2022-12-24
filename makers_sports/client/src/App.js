import {useEffect, useState} from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Navigation from './components/Navigation'



function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
        });
      }
    })
  },[])

  console.log(currentUser);
  const updateUser = (user) => setCurrentUser(user)

  if(errors) return <h1>{errors}</h1>

  return (
    <div className="App">
      <Navigation updateUser={updateUser} />
      <Switch>
          <Route path='/login'>
            <Login updateUser={updateUser}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
