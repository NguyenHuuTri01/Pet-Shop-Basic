import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const { myCart, total, addToCart, setTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckOut = () => {
    setTotal(0);
    addToCart([{}]);
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CHECKOUT: </div>
        <div className="cart-items">
          {myCart.slice(1).map((item) => {
            return (
              <div className="cart-item">
                <img
                  src={item.imageUrl}
                  className="cart-item-img"
                  alt="error"
                />
                {item.name} : {item.price}$
              </div>
            );
          })}
          <div className="cart-total">ToTAL: {total}$</div>
        </div>
        <button className="cart-checkout" onClick={handleCheckOut}>
          DONE
        </button>
        <button className="cart-gohome" onClick={handleHome}>
          RETURN HOME
        </button>
      </section>
    </>
  );
};

export default CartPage;
