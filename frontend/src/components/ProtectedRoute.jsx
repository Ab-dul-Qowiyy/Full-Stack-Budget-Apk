import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('userSession');

    if(!token){
        return <Navigate to="/auth/user/login" replace />
    }
  return children
}

export default ProtectedRoute
