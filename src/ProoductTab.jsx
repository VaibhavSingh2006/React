import "./App"
import "./Product.css";
import Product from "./Product.jsx"

function ProductTab(){
    return (
        <div className="tab">
          <Product title="Apple" description="premium" price1="₹12,495" price2="₹8,999"/>
          <Product title="Samsung" description="galaxy" price1="₹11,900" price2="₹9,199"/>
          <Product title="Nokia" description="old" price1="₹1,599" price2="₹899"/>
          <Product title="Mercari" description="japan" price1="₹599" price2="₹278"/>
        </div>
    );
}

export default ProductTab;