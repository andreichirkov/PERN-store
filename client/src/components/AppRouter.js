import React, { useContext } from "react"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { authRoutes, publicRoutes } from "../routes"
import Shop from "../pages/Shop"
import { Context } from "../index"

const AppRouter = () => {
  const { user } = useContext(Context)
  console.log(user)
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route path={path} key={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} key={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Shop />} />
    </Routes>
  )
}

export default AppRouter
