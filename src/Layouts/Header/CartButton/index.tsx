import { Link } from "react-router-dom"
import CartIcon from "../Atom/CartIcon"
import { useRecoilValue } from "recoil"
import { ICartState, cartState } from "../../../store/cart"

const CartButton = () => {
  const cartItems = useRecoilValue(cartState)

  const getTotalItemCount = (cart: ICartState): number => {
    const items = cart.items ?? {};

    return Object.values(items).reduce((total, item) => total + item.count, 0);
  };

  return (
    <Link className="btn btn-ghost w-10 sm:w-12 ml-1" to="/cart">
      <span className="relative">
        <CartIcon />
        <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
          {getTotalItemCount(cartItems)}
        </span>
      </span>
    </Link>
  )
}

export default CartButton