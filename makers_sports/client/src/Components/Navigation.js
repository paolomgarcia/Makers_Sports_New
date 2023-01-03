import { useState } from 'react'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'



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
      <nav>
      <h1>Makers Sports Agency</h1>
      <menu>
        <button onClick={handleLogout}>Log Out</button>
        {!menu?
        <div onClick={() => setMenu(!menu)}>
          <GiHamburgerMenu size={30}/>
        </div>:
        <ul>
         {/* <li onClick={() => setMenu(!menu)}>x</li> */}
         <li><Link to='/login'>Login</Link></li>
         <li><Link to='/productions/'>Players</Link></li>
         <li><Link to='/'> Home</Link></li>
        </ul>
        }
      </menu>

     </nav>
    )

}

export default Navigation;



