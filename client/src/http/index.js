import axios from "axios"

//Нужны 2 инстанса: где нужна авторизация и где нет
//У одного будет authorization header

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const authInterception = config => {
  return (config.headers.authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`)
}

//Этот интерцептор будет отрабатывать перед каждым запросом
//Аналог как вбить этот токен в ПостМан
$authHost.interceptors.request.use(authInterception)

export { $host, $authHost }
