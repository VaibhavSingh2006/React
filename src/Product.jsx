import "./Product.css";
import Price from "./price"
function Product({title, description, price1, price2}) {
  return (
    <div className="small">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="price">
        <span className="old">{price1}</span>
        <span className="new">{price2}</span>
      </div>
    </div>
  );
}

export default Product;