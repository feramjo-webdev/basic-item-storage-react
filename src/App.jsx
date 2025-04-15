import { useState, useEffect } from 'react';
import Form from './Form';
import Items from './Items';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const groceriesList = JSON.parse(localStorage.getItem('list') || '[]');
  const [groceries, setGroceries] = useState(groceriesList);

  const addGrocery = (grocery) => {
    const updatedGroceries = [
      ...groceries,
      { name: grocery, id: nanoid(), completed: false },
    ];
    setGroceries(updatedGroceries);
    toast.success('Grocery added to the list');
  };

  const removeGrocery = (id) => {
    const newGroceries = groceries.filter((grocery) => grocery.id !== id);
    setGroceries(newGroceries);
    toast.success('Grocery deleted');
  };

  const editGrocery = (id) => {
    const updatedGroceries = groceries.map((grocery) => {
      return grocery.id === id
        ? { ...grocery, completed: !grocery.completed }
        : grocery;
    });
    setGroceries(updatedGroceries);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(groceries));
  }, [groceries]);

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addGrocery={addGrocery} />
      {groceries.length > 0 && (
        <Items
          groceries={groceries}
          removeGrocery={removeGrocery}
          editGrocery={editGrocery}
        />
      )}
    </section>
  );
};

export default App;
