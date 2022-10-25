import { useState } from 'react';

const Content = () => {
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
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
                />
                <label 
                  style={(item.checked) ? {textDecoration: 'line-through'} : null}
                  onDoubleClick={() => handleCheck(item.id)}
                >{item.item}</label>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty</p>
      )}
    </main>
  )
}

export default Content