import { $authHost, $host } from "./index"

// ~ Типы ~

//Для этого запроса надо быть с ролью Админа
//Это проверится на бэке по токену
export const createType = async type => {
  const { data } = await $authHost.post("api/type", type)
  return data
}

//Список типов может получить любой юзер
export const fetchTypes = async () => {
  const { data } = await $host.get("api/type")
  return data
}

// ~ Бренды ~
export const createBrand = async brand => {
  const { data } = await $authHost.post("api/type", brand)
  return data
}

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand")
  return data
}

// ~ Девайсы ~
export const createDevice = async device => {
  const { data } = await $authHost.post("api/device", device)
  return data
}

export const fetchDevices = async () => {
  const { data } = await $host.get("api/device")
  return data
}

export const fetchOneDevice = async id => {
  const { data } = await $host.get("api/device/" + id)
  return data
}
