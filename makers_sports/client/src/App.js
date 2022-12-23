import { Route, Switch } from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import {useEffect, useState} from 'react'
import Login from './Components/Login'
// import Home from './components/Home'
// import ProductionForm from './components/ProductionForm'
// import EditProductionForm from './components/EditProductionForm'
// import Navigation from './components/Navigation'
// import ProductionDetail from './components/ProductionDetail'
// import UserPage from './components/UserPage'
// import NotFound from './components/NotFound'

function App() {
  // const [count, setCount] = useState(0); <- used for the cookies testing
  // const [productions, setProductions] = useState([])
  // const [errors, setErrors] = useState(false)
  const [currentAgent, setCurrentAgent] = useState(false)



  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((agent) => {
          setCurrentAgent(agent);
          // fetchPlayers() here potentially
        });
      }
    })
  },[])

  const updateAgent = (agent) => setCurrentAgent(agent)



  return (
  <Route path='/login'>
    <Login updateUser={updateAgent}/>
  </Route>


  )
}

export default App;






  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

//   <div className="App">
//   <h1>Page Count: {count}</h1>
// </div>
// );
// }
