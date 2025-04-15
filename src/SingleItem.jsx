import { useState } from 'react';

const SingleItem = ({ name, id, completed, removeGrocery, editGrocery }) => {
  return (
    <article className='single-item'>
      <input
        type='checkbox'
        id={id}
        checked={completed}
        onChange={() => editGrocery(id)}
      />
      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {name}
      </p>
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => removeGrocery(id)}
      >
        delete
      </button>
    </article>
  );
};
export default SingleItem;
