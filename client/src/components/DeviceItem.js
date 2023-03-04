import React from "react"
import { Card, Col, Image } from "react-bootstrap"
import star from '../assets/star.png'

const DeviceItem = ({ device }) => {
  return (
    <Col md={3} className='mt-3'>
      <Card style={{ width: 150, cursor: "pointer", border: "light" }}>
        <Image width={150} height={150} src={device.img} />
        <div className='mt-2 text-black-50 d-flex justify-content-between align-items-center'>
          <div>samsung</div>
          <div className='d-flex align-items-center'>
            <div>{device.rating}</div>
            <Image width={13} height={13} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}

export default DeviceItem
