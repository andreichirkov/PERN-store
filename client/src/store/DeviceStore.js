import { makeAutoObservable } from "mobx"

export default class DeviceStore {
  constructor() {
    this._types = []
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" }
    ]
    this._devices = [
      {
        id: 1,
        name: "iPhone 12 Pro",
        price: 55000,
        rating: 5,
        img: "https://img.freepik.com/free-vector/valentines-day-vector-card-template-with-a-red-heart-shaped-text-space-on-a-white-background_8130-1796.jpg?w=1800&t=st=1677755239~exp=1677755839~hmac=5464bbd6c1d382ea0154d91daf9f4e4d5d406b8bd57fae1e40bc946113b636c3"
      },
      {
        id: 2,
        name: "iPhone 12 Pro",
        price: 55000,
        rating: 5,
        img: "https://img.freepik.com/free-vector/valentines-day-vector-card-template-with-a-red-heart-shaped-text-space-on-a-white-background_8130-1796.jpg?w=1800&t=st=1677755239~exp=1677755839~hmac=5464bbd6c1d382ea0154d91daf9f4e4d5d406b8bd57fae1e40bc946113b636c3"
      },
      {
        id: 3,
        name: "iPhone 12 Pro",
        price: 55000,
        rating: 5,
        img: "https://img.freepik.com/free-vector/valentines-day-vector-card-template-with-a-red-heart-shaped-text-space-on-a-white-background_8130-1796.jpg?w=1800&t=st=1677755239~exp=1677755839~hmac=5464bbd6c1d382ea0154d91daf9f4e4d5d406b8bd57fae1e40bc946113b636c3"
      },
      {
        id: 4,
        name: "iPhone 12 Pro",
        price: 55000,
        rating: 5,
        img: "https://img.freepik.com/free-vector/valentines-day-vector-card-template-with-a-red-heart-shaped-text-space-on-a-white-background_8130-1796.jpg?w=1800&t=st=1677755239~exp=1677755839~hmac=5464bbd6c1d382ea0154d91daf9f4e4d5d406b8bd57fae1e40bc946113b636c3"
      }
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }

  //Actions
  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevices(devices) {
    this._devices = devices
  }

  setSelectedType(type) {
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }
}
