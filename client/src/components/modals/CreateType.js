import { Button, Form, Modal } from "react-bootstrap"
import { useState } from "react"
import { createType } from "../../http/deviceAPI"

//onHide - func которая скрывает модалку
const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState("")

  const addType = () => {
    //У создания Типа есть только одно поле name в объекте
    createType({ name: value }).then(_ => {
      setValue("")
      onHide()
    })
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
          <Form.Control
            placeholder={"Введите назвние типа"}
            value={value}
            onChange={e => setValue(e.target.value)} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateType
