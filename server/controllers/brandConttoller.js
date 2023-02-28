const { Brand, Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
  async create(req, res) {
    const { name } = req.body
    const brand = await Brand.create({name})
    return res.json(brand)
  }

  async getAll(req, res) {
    const brands = await Brand.findAll()
    return res.json(brands)

    // return res.json(
    //   {
    //     "data": {
    //       "amount": "34534535",
    //       "pallets": [
    //         {
    //           "type": "euro",
    //           "pallet_input_output": {
    //             "one_price": 111,
    //             "mounth_count": 11,
    //             "mounth_price": 1111
    //           },
    //           "pallet_save_info": {
    //             "day_price": 100,
    //             "pallet_count": 110,
    //             "mounth_price": 1110
    //           },
    //           "summary_amount": 111000
    //         },
    //         {
    //           "type": "american",
    //           "pallet_input_output": {
    //             "one_price": 2111,
    //             "mounth_count": 211,
    //             "mounth_price": 21111
    //           },
    //           "pallet_save_info": {
    //             "day_price": 2100,
    //             "pallet_count": 2110,
    //             "mounth_price": 21110
    //           },
    //           "summary_amount": 2111000
    //         },
    //         {
    //           "type": "finnish",
    //           "pallet_input_output": {
    //             "one_price": 3111,
    //             "mounth_count": 311,
    //             "mounth_price": 31111
    //           },
    //           "pallet_save_info": {
    //             "day_price": 3100,
    //             "pallet_count": 3110,
    //             "mounth_price": 31110
    //           },
    //           "summary_amount": 3111000
    //         }
    //       ]
    //     }
    //   }
    // )
  }
}

module.exports = new BrandController()