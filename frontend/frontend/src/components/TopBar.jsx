import { useEffect, useState } from 'react'
import { useAuth } from '../Authentication'

function TopBar() {
  const {logout} = useAuth();

  const handleClick = () => {
    logout()
  }

  return (
    <>
      <span>Training course platform</span>
      <button onClick={handleClick}>Log out</button>
    </>
  )
}

export default TopBar