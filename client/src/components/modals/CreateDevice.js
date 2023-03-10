import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../../index";


const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(Context)

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type => (
                <Dropdown.Item>

                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
        <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;