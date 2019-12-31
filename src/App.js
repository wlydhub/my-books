import React from 'react';
import './App.css';
import PriceList from './components/PriceList';

const items = [
  {
    id: '1',
    title: '吃饭',
    price: '20',
    date: '2019-08-30',
    category: {
      id: '1',
      name: '食',
      type: 'out',
    }
  },
  {
    id: '2',
    title: '旅游',
    price: '13',
    date: '2019-08-31',
    category: {
      id: '2',
      name: '住',
      type: 'out',
    }
  }
]

function App() {
  return (
    <div className="App">
      <PriceList 
        items = {items} 
        onModifyItem = {(item)=>{alert(item.id)}}
        onDeleteItem = {(item)=>{alert(item.title)}}
      />
    </div>
  );
}

export default App;
