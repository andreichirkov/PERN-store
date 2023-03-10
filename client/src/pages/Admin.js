import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import CreateDevice from "../components/modals/CreateDevice"
import CreateType from "../components/modals/CreateType"
import CreateBrand from "../components/modals/CreateBrand"

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setTypeVisible(true)}
        variant={"outline-dark"}
        className="mt-3">
        Добавить тип
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant={"outline-dark"}
        className="mt-3">
        Добавить бренд
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant={"outline-dark"}
        className="mt-3">
        Добавить устройство
      </Button>
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
    </Container>
  )
}

export default Admin
