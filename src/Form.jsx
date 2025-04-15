import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addGrocery }) => {
  const [grocery, setGrocery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!grocery) {
      toast.error('Enter a grocery');
      return;
    }
    addGrocery(grocery);
    setGrocery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className='form-control'>
        <input
          type='text'
          id='grocery'
          className='form-input'
          value={grocery}
          onChange={(e) => setGrocery(e.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
