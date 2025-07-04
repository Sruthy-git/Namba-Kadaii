import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <p className="text-gray-700">You are viewing product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
