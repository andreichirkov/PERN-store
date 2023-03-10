import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import NavBar from "./components/NavBar"
import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import { Context } from "./index"
import { check } from "./http/userAPI"
import { Spinner } from "react-bootstrap"

const App = observer(() => {
  const { user } = useContext(Context)

  //Локальное состояние: идет загрузка или нет
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check()
        .then(data => {
          console.log("-->", data)
          user.setUser(true)
          user.setIsAuth(true)
        })
        .finally(() => setLoading(false))
    }, 1000)
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
})

export default App
