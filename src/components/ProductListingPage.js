import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Fern', price: 12, image: '/plants/fern.jpg', category: 'Air Purifying' },
  { id: 2, name: 'Aloe Vera', price: 15, image: '/plants/aloe.jpg', category: 'Succulent' },
  { id: 3, name: 'Cactus', price: 10, image: '/plants/cactus.jpg', category: 'Succulent' },
  { id: 4, name: 'Orchid', price: 25, image: '/plants/orchid.jpg', category: 'Flowering' },
  { id: 5, name: 'Money Plant', price: 18, image: '/plants/moneyplant.jpg', category: 'Air Purifying' },
  { id: 6, name: 'Bonsai', price: 30, image: '/plants/bonsai.jpg', category: 'Decorative' },
];

function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="products">
      <h2>Our Plants</h2>
      <div className="product-grid">
        {plants.map((plant) => {
          const inCart = cartItems.find((item) => item.id === plant.id);
          return (
            <div key={plant.id} className="product-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>
              <p><em>{plant.category}</em></p>
              <button
                onClick={() => handleAdd(plant)}
                disabled={!!inCart}
              >
                {inCart ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListingPage;
