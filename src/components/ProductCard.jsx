import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition w-full">
      {/* Product Image */}
      <img
        src={imgError ? "/assets/placeholder.png" : product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded mb-2"
        onError={() => setImgError(true)}
      />

      {/* Product Name */}
      <h3 className="text-md font-semibold text-black mb-1">
        {product.name}
      </h3>

      {/* Price and Rating */}
      <div className="flex items-center justify-between text-sm text-gray-700">
        <span>₹{product.price}</span>
        <div className="flex items-center space-x-1">
          <Star size={16} className="text-yellow-500 fill-yellow-400" />
          <span>{product.rating}</span>
        </div>
      </div>

      {/* Reviews */}
      <p className="text-xs text-gray-500 mt-1">
        {product.reviews} Review{product.reviews !== 1 && 's'}
      </p>

      {/* Add to Cart Button */}
      <div className="mt-3 flex justify-center">
        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-2 rounded hover:bg-[#66615E]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
