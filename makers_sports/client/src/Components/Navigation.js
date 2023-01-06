import { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'


function Navigation({updateUser}) {
  const [menu, setMenu] = useState(false)

    const handleLogout = () => {
        fetch(`/logout`, {
          method:"DELETE"
        })
        .then(res =>{
          if(res.ok){
            updateUser(false)
          }
        })
      }

    return (
      <>
      <div className="navbar bg-base-100">
        <img src={logo} alt="logo" style={{maxHeight: "75px", maxWidth: "75px"}}/>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl"><Link to='/'>Maker's Sports Agency</Link></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li className="btn btn-primary" ><Link to='/'> Home</Link></li>
    <li className="btn btn-primary"><Link to='/players/new'>Add Players</Link></li>
    <li className="btn btn-primary"><Link to='/login'>Login</Link></li>
    <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
    </ul>
  </div>
</div>
     </>
    )
}

export default Navigation;



