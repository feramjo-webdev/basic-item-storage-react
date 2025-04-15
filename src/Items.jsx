import SingleItem from './SingleItem';

const Items = ({ groceries, removeGrocery, editGrocery }) => {
  return (
    <div className='items'>
      {groceries.map((grocery) => {
        return (
          <SingleItem
            {...grocery}
            key={grocery.id}
            removeGrocery={removeGrocery}
            editGrocery={editGrocery}
          />
        );
      })}
    </div>
  );
};
export default Items;
