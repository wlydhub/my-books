import React from 'react'
import { Row, Col, Button } from 'antd';

const PriceList = ({items, onModifyItem, onDeleteItem}) => {
  return(
    <div className='PriceList'>
      {
        items.map((item) => (
          <Row key={item.id}>
            <Col span={2}><Button type="primary" size='small'>{item.category.name}</Button></Col>
            <Col span={10}>{item.title}</Col>
            <Col span={4}>
              <strong>
                {(item.category.type === 'in' ? '+' : '-')}
                {item.price}
                元
              </strong>
            </Col>
            <Col span={4}>{item.date}</Col>
            <Col span={2}>
              <Button type="primary" size='small' onClick={()=>{onModifyItem(item)}} >
                编辑
              </Button>
            </Col>
            <Col span={2}>
            <Button type="danger" size='small' onClick={()=>{onDeleteItem(item)}}>
              删除
            </Button>
            </Col>
          </Row>
        ))
      }
    </div>
  )
}

export default PriceList;
