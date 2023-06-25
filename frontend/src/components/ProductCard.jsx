import React, { useState } from "react";
import "./ProductCard.css";
const ProductCard = (props) => {
  const [editBtn, setEditBtn] = useState(false);
  const [editProductState, setEditProductState] = useState({
    id: props.id,
    title: props.title,
    publisher: props.publisher,
    genre: props.genre,
    price: props.price,
  });
  //editProduct
  //returns {key: uuidv4(),
  // id: 1,
  // title: "Hogwarts Legacy",
  // publisher: "Warner Bros.",
  // genre: "Adventure",
  // price: 59.99,
  // }
  const editProductFunc = () => {
    //full manual
    // props.editProduct({
    //   key: editProductState.key,
    //   id: editProductState.id,
    //   title: editProductState.title,
    //   publisher: editProductState.publisher,
    //   genre: editProductState.genre,
    //   price: editProductState.price,
    // })
    //assuming state does not include key or id partial deconstruction
    // props.editProduct({
    //   key: props.key,
    //   id: props.id,
    //   ...editProductState
    // })
    //works only if all varlues are in edittProductState
    props.editProduct(editProductState);
    setEditBtn(!editBtn);
  };
  const onChangeHandler = (e) => {
    (e.target.name === 'price') ? 
    setEditProductState({
      ...editProductState,
      [e.target.name]: parseFloat(parseFloat(e.target.value).toFixed(2)),
    }):
    setEditProductState({
      ...editProductState,
      [e.target.name]: e.target.value,
    })
  };
  return (
    <div className='product-card'>
      <h2>
        <u>{props.title}</u>
      </h2>

      {editBtn ? (
        <div>
          <p>true:edit</p>
          <label htmlFor='title'>Title: </label>
          <input
            type='text'
            name='title'
            value={editProductState.title}
            onChange={onChangeHandler}
          />
          <br />
          <label htmlFor='publisher'>Publisher: </label>
          <input
            type='text'
            name='publisher'
            value={editProductState.publisher}
            onChange={onChangeHandler}
          />
          <br />
          <label htmlFor='genre'>Genre:</label>
          <input
            type='text'
            name='genre'
            value={editProductState.genre}
            onChange={onChangeHandler}
          />
          <br />
          <label htmlFor='price'>Price:</label>
          <input
            type='number'
            name='price'
            step='.01'
            min='0'
            value={editProductState.price}
            onChange={onChangeHandler}
          />
          <br />
          <button onClick={editProductFunc}>Save Changes</button>
        </div>
      ) : (
        <>
          <p>Publisher: {props.publisher}</p>
          <p>Genre: {props.genre}</p>
          <p>Price: ${props.price}</p>
        </>
      )}
      {/* onClick should should trigger props.deleteProduct */}
      <button onClick={() => props.deleteProduct(props.id)}>Delete!</button>
      <button onClick={() => setEditBtn(!editBtn)}>Toggle Edit</button>
    </div>
  );
};

export default ProductCard;