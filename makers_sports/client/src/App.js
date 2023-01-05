import {useEffect, useState} from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Navigation from './components/Navigation'
import Home from './components/Home'
import PlayerForm from './components/PlayerForm'
import PlayerDetail from './components/PlayerDetail'
import EditPlayerForm from './components/EditPlayerForm'

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

  const updatePlayer = (updatedPlayer) => setPlayers(current => {
    return current.map(player => {
     if(player.id === updatedPlayer.id){
       return updatedPlayer
     } else {
       return player
     }
    })
  })

  const deletePlayer = (id) => setPlayers(current => current.filter(p => p.id !== id))


  console.log(currentUser);
  const updateUser = (user) => setCurrentUser(user)

 if(errors) return <h1>{errors}</h1>

  return (
    <>
    <Navigation updateUser={updateUser}/>
    { !currentUser? <Login error={'please login'} updateUser={updateUser} /> :
      <Switch>
      {/* <Route path='/users/:id'>
        <UserPage updateUser={updateUser}/>
      </Route> */}

      <Route exact path='/login'>
        <Login updateUser={updateUser}/>
      </Route>

      <Route exact path='/'>
        <Home players={players}/>
      </Route>

      <Route  exact path='/players/new'>
        <PlayerForm addPlayer={addPlayer}/>
      </Route>

      <Route exact path='/players/:id'>
          <PlayerDetail deletePlayer={deletePlayer}/>
      </Route>

      <Route  exact path='/players/:id/edit'>
        <EditPlayerForm updatePlayer={updatePlayer}/>
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
