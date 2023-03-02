import React, { useContext } from "react"
import { Context } from "../index"
import {Button, Container, Nav, Navbar} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { SHOP_ROUTE } from "../utils/consts"
import { observer } from "mobx-react-lite"

//НавБар будет отображаться по-разному (авторизован юзер или нет)
const NavBar = observer(() => {
  const { user } = useContext(Context)

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Купи Гаджет
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"}>Админка</Button>
            <Button variant={"outline-light"} className='ml-2'>Выйти</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              onClick={() => user.setIsAuth(true)}
              variant={"outline-light"}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>

    </Navbar>
  )
})

export default NavBar