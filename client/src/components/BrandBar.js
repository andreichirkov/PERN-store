import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, ListGroup, Row} from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <Row className='d-flex'>
      {device.brands.map(brand => (
        <Card
          onClick={() => device.setSelectedBrand(brand)}
          className='p-3'
          style={{cursor: 'pointer'}}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          key={brand.id}>
          {brand.name}
        </Card>
      ))}
    </Row>
  )
})

export default BrandBar;