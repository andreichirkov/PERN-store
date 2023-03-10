import {Button, Form, Modal} from "react-bootstrap";


const CreateBrand = ({show, onHide}) => {
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
          <Form.Control
            placeholder={'Введите назвние типа'}
          >

          </Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
        <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;