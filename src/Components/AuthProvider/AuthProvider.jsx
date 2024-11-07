import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const AuthProvider = ({children}) => {
    const isLogin=useSelector((state)=>state.auth.token)
    if (!isLogin) 
        return <Navigate to={"/Account"} replace />
        return <>{children}</>
}

export default AuthProvider