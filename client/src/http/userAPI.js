import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN"
  })
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password
  })
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

//Пользователь авторизовался и получил Токен, сохранился
//Каждый раз при обновлении страницы будет вызываться эта функция
//Если пользователь не валидный => будет разлогиниваться
//... У $authHost уже есть в хедере токен, полученный из ЛокалСтораджа
//Перезаписываем Токен
export const check = async () => {
  const { data } = await $authHost.get('api/user/auth')
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}