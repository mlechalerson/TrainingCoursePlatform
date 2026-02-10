import React, { useEffect, useState } from 'react'
import { useAuth } from './Authentication'
import TopBar from './components/TopBar'
import HomePage from './pages/HomePage'
import UserDashboard from './pages/UserDashboard'
import ShoppingCart from './pages/ShoppingCart'
import AdminPanel from './pages/AdminPanel'
import CoursePage from './pages/CoursePage'

function Content() {
    const {user, logout} = useAuth();
    const [page, setPage] = useState('home');

    const renderPage = () => {
        switch (page) {
            case 'home':
                return <HomePage></HomePage>
                break;
            case 'dashboard':
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
            <button onClick={()=> setPage('home')}>Home</button>{' '}
            <button onClick={()=> setPage('dashboard')}>My Courses</button>{' '}
            <button onClick={()=> setPage('cart')}>Shopping Cart</button>{' '}
            <button onClick={logout}>Log out</button><br/>

            {renderPage()}
        </>
    )
}

export default Content;