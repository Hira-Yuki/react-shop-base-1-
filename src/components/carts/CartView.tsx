import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";
import CartList from "./CartList";
import { useRecoilValue } from "recoil";
import { ICartState, cartState, getTotalItemCount } from "../../store/cart";
import NoCartItem from "./NoCartItem";
import TotalPrice from "./TotalPrice";
import { useState } from "react";

const CartView = (): JSX.Element => {
  const cart = useRecoilValue<ICartState>(cartState);
  const totalCount = getTotalItemCount(cart)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {totalCount > 0 ? (
          <CartList />
        ) : (
          <NoCartItem />
        )}
        {/* 구매하기 버튼 등 화면을 구성 해보세요. */}
        <TotalPrice />
      </div>
      <Confirm />
    </>
  );
};

export default CartView;
