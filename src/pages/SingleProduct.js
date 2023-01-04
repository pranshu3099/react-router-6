import { Link, useParams } from "react-router-dom";
const SingleProduct = () => {
  const { productid } = useParams();
  return (
    <>
      <h4>{productid}</h4>
      <Link to="/product">Back to products</Link>
    </>
  );
};

export default SingleProduct;
