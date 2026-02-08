import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import UserDashboard from './pages/UserDashboard'
import ShoppingCart from './pages/ShoppingCart'
import LoginPage from './pages/LoginPage'
import Authentication from './Authentication'

function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    console.log(page)
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage></HomePage>
        break;
      case 'courses':
        return <UserDashboard></UserDashboard>
        break;
      case 'cart':
        return <ShoppingCart></ShoppingCart>
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Authentication>
        <LoginPage></LoginPage>
      </Authentication>
      
      {/*<h1>Training Course Platform</h1>
      <button onClick={() => {setPage('home')}}>Home</button>{' '}
      <button onClick={() => {setPage('courses')}}>My Courses</button>{' '}
      <button onClick={() => {setPage('cart')}}>Shopping Cart</button><br/>
      <div>{renderPage()}</div>*/}
    </>
  )
}

export default App
