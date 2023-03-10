import { Button, Form, Modal } from "react-bootstrap"
import { useState } from "react"
import { createBrand } from "../../http/deviceAPI"

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("")

  const addBrand = () => {
    //У создания Типа есть только одно поле name в объекте
    createBrand({ name: value }).then(_ => {
      setValue("")
      onHide()
    })
  }

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"Введите назвние бренда"}
            value={value}
            onChange={e => setValue(e.target.value)} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateBrand
