import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
каукауамвам
      <AppRouter />
    </BrowserRouter>
  )
}

