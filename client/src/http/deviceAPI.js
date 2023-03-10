import {$authHost, $host} from "./index";

//Для этого запроса надо быть с ролью Админа
//Это проверится на бэке по токену
export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type)
  return data
}

//Список типов может получить любой юзер
export const fetchTypes = async (email, password) => {
  const { data } = await $host.get('api/type')
  return data
}