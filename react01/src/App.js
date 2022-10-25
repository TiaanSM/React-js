import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [items, setItmes] = useState([
    {
      id: 1,
      checked: false,
      item: 'Cocoa covered almonds'
    },
    {
      id: 2,
      checked: false,
      item: 'item 2'
    },
    {
      id: 3,
      checked: false,
      item: 'item 3'
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
    setItmes(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItmes(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }



  return (
    <div className="App">
      <Header title="Grocerie List"/>
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
