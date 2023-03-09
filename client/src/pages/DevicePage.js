import React from "react"
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"

const DevicePage = () => {
  const device = {
    id: 1,
    name: "iPhone 12 Pro",
    price: 55000,
    rating: 5,
    img: "https://img.freepik.com/free-vector/valentines-day-vector-card-template-with-a-red-heart-shaped-text-space-on-a-white-background_8130-1796.jpg?w=1800&t=st=1677755239~exp=1677755839~hmac=5464bbd6c1d382ea0154d91daf9f4e4d5d406b8bd57fae1e40bc946113b636c3"
  }

  const description = [
    {
      id: 1,
      title: "Память",
      description: "5ГБ"
    },
    {
      id: 2,
      title: "Процессор",
      description: "Пентиум 3"
    }
  ]

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={device.img} width={300} height={300} />
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
        {description.map((info, index) => (
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
