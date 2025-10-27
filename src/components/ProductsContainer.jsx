import ProductCard from "./ProductCard";

function ProductsContainer(props) {
  const products = props.products;
  const addToCart = props.addToCart;
  const removeFromCart = props.removeFromCart;

  let productCards = [];

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    productCards.push(
      <ProductCard
        key={product.id}
        id={product.id}
        name={product.productName}
        price={product.price}
        image={product.image}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    );
  }

  return (
    <div className="ProductsContainer">
        {productCards}
    </div>
  );
}

export default ProductsContainer;
