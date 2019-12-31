import React from 'react'
import { List, Avatar } from 'antd';

const PriceList = ({items, onModifyItem, onDeleteItem}) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={item.title}
          />
          <div style = 'weight:100px'>content</div>
          <div>content</div>
        </List.Item>
      )}
    />
  )
}


export default PriceList;
