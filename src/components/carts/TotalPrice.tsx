import { useRecoilValue } from "recoil";
import { ICartState, cartState } from "../../store/cart";
import GetApi from "../../helpers/axios";
import { useEffect, useState } from "react";
import { toCurrencyFormat } from "../../helpers/helpers";

const TotalPrice = () => {
  const cart = useRecoilValue<ICartState>(cartState);
  const CartItems = Object.values(cart.items ?? {});
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    const fetchPrices = async () => {
      let total = 0;
      for (const item of CartItems) {
        const { data } = await GetApi.getProductsItem(item.id);
        total += data.price * item.count;
      }
      setTotalPrice(toCurrencyFormat(total));
    };

    fetchPrices();
  }, [cart]);

  return (
    <div className="self-start shrink-0 flex items-center mt-10 mb-20">
      <span className="text-xl md:text-2xl">
        총 : {totalPrice}
      </span>
      <label htmlFor="confirm-modal" className="modal-button btn btn-primary ml-5">
        구매하기
      </label>
    </div>
  )
}

export default TotalPrice