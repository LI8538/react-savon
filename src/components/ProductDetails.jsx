import { useParams } from "react-router-dom";
import Count from "./Count";

const ProductDetails = ({ products, addProduct }) => {
  let { url: urlFromBrowser } = useParams();
  const productInfo = products.filter(
    (product) => product.url === urlFromBrowser
  )[0];
  const { name, price, category,source} = productInfo;
  return (
    <div className="ProductDetails">
      <h2>{name}</h2>
      <img src={source} alt={name} width={500} height={500} />
      <p>${price}</p>
      <p>{category}</p>
      <Count addProduct={addProduct} productInfo={productInfo} />
    </div>
  );
};

export default ProductDetails;
