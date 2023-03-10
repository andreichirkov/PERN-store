import React, { useEffect, useState } from "react"
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { fetchOneDevice } from "../http/deviceAPI"

const DevicePage = () => {
  const { id } = useParams()
  const [device, setDevice] = useState({ info: [] })

  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            src={process.env.REACT_APP_API_URL + device.img}
            width={300}
            height={300}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              style={{ fontSize: 64 }}
              className="d-flex align-items-center justify-content-center">
              Рейтинг: {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray"
            }}>
            <h3>{device.price} РУБ</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Характеристики:</h2>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              padding: 10,
              background: index % 2 === 0 ? "lightcyan" : "lightpink"
            }}>
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  )
}

export default DevicePage
