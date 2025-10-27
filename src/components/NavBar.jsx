import cartEmptyImage from "../assets/cart-empty.png";
import cartFullImage from "../assets/cart-full.png";

function NavBar(props) {
  const cartCount = props.cartCount;
  const username = props.username;

  // which cart to show
  let cartImage;
  if (cartCount > 0) {
    cartImage = cartFullImage;
  } else {
    cartImage = cartEmptyImage;
  }

  return (
    <div className="NavBar">
      <div className="NavDiv NavUser">
        Hello, {username}!
      </div>
      <div className="NavDiv NavTitle">
        <h1>My Grocery Store</h1>
      </div>
      <div className="NavDiv NavCart">
        <img src={cartImage} alt="Cart" />
      </div>
    </div>
  );
}

export default NavBar;