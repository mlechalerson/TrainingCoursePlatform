import React, { useEffect, useState } from 'react'
import { useAuth } from './Authentication'
import TopBar from './components/TopBar'
import HomePage from './pages/HomePage'
import UserDashboard from './pages/UserDashboard'
import ShoppingCart from './pages/ShoppingCart'
import LoginPage from './pages/LoginPage'
import AdminPanel from './pages/AdminPanel'
import CoursePage from './pages/CoursePage'
import Content from './Content'

function ContentWrapper() {
    const {user, login, logout} = useAuth();

    const checkLogin = () => {
        if(!user) {
            return <LoginPage></LoginPage>
        }else {
            return <Content></Content>
        }
    }

    return (
        <>
            {checkLogin()}
        </>
    )
}

export default ContentWrapper