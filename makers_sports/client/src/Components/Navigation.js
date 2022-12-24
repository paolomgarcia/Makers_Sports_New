import React from 'react';

function Navigation({updateUser}) {

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
        <div>
            <button onClick={handleLogout}>logout</button>
        </div>
    )

}

export default Navigation;