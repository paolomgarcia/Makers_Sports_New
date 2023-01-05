import {useEffect, useState} from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Navigation from './components/Navigation'
import Home from './components/Home'
import PlayerForm from './components/PlayerForm'



function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [players, setPlayers] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
          fetchPlayers()
        });
      }
    })
  },[])

  const fetchPlayers = () => {
    fetch('/players')
    .then(res => {
      if(res.ok){
        res.json().then(setPlayers)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  const addPlayer = (player) => setPlayers(current => [...current,player])

  console.log(currentUser);
  const updateUser = (user) => setCurrentUser(user)

 if(errors) return <h1>{errors}</h1>

  return (
    <>
    <Navigation updateUser={updateUser}/>
    { !currentUser? <Login error={'please login'} updateUser={updateUser} /> :
      <Switch>

      {/* <Route  path='/productions/:id/edit'>
        <EditProductionForm updateProduction={updateProduction}/>
      </Route> */}

      {/* <Route path='/productions/:id'>
          <ProductionDetail deleteProduction={deleteProduction}/>
      </Route> */}

      {/* <Route path='/users/:id'>
        <UserPage updateUser={updateUser}/>
      </Route> */}

      <Route path='/login'>
        <Login updateUser={updateUser}/>
      </Route>


      <Route exact path='/'>
        <Home players={players}/>
      </Route>

      <Route  path='/players/new'>
        <PlayerForm addPlayer={addPlayer}/>
      </Route>

      {/* <Route>
        <NotFound />
      </Route> */}

      </Switch>
}
    </>
  )
}

export default App;
