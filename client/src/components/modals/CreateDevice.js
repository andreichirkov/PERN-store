import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../index"
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI"
import { observer } from "mobx-react-lite"

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context)

  const [info, setInfo] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)

  const [file, setFile] = useState(null)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
  }, [])

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }])
  }

  const removeInfo = number => {
    setInfo(info.filter(i => i.number !== number))
  }

  //key тут title или description
  //number тут привязан к созданию даты = типо уникальный = типо id
  //тут значение заменится(которое пустая сторока) или не заменится
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map(item =>
        item.number === number ? { ...item, [key]: value } : item
      )
    )
  }

  const selectFile = e => {
    console.log(e.target.files)
    setFile(e.target.files[0])
  }

  const addDevice = () => {
    const formData = new FormData()

    formData.append("name", name)
    formData.append("price", price.toString())
    formData.append("img", file)
    formData.append("brandId", device.selectedBrand.id)
    formData.append("typeId", device.selectedType.id)
    formData.append("info", JSON.stringify(info))

    createDevice(formData).then(_ => onHide())
  }

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedType.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ margin: 0 }}>
              {device.types.map(type => (
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedBrand.name || "Выберите бренд"}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ margin: 0 }}>
              {device.brands.map(brand => (
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название устройства"
          />
          <Form.Control
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
          />
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
          <hr />
          <Button variant={"outline-dark"} onClick={addInfo}>
            Добавить новое свойтво
          </Button>
          {info.map(item => (
            <Row className="mt-3" key={item.number}>
              <Col md={4}>
                <Form.Control
                  value={item.title}
                  onChange={e =>
                    changeInfo("title", e.target.value, item.number)
                  }
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={item.description}
                  onChange={e =>
                    changeInfo("description", e.target.value, item.number)
                  }
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(item.number)}
                  variant={"outline-danger"}>
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateDevice
