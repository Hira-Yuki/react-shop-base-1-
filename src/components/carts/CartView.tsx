import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";
import LinkItem from "../atom/LinkItem";
import CartList from "./CartList";
import { useRecoilState } from "recoil";
import { ICartState, cartState, getTotalItemCount } from "../../store/cart";

const CartView = (): JSX.Element => {
  const [cart, setCart] = useRecoilState<ICartState>(cartState);
  const totalCount = getTotalItemCount(cart)
  return (
    <>
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {totalCount > 0 ? (<CartList />) : (
          <div>
            <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
            <LinkItem To="/" classNames="btn btn-primary mt-10">
              담으러 가기
            </LinkItem>
          </div>
        )}

        {/* 물품이 없다면? */}

        {/* 구매하기 버튼 등 화면을 구성 해보세요. */}
      </div>
      <Confirm />
    </>
  );
};

export default CartView;

{/* <section class="main pt-16">
  <section class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
    <div class="text-sm breadcrumbs">
      <ul>
        <li>홈</li>
        <li>장바구니</li>
      </ul>
    </div>
    <div class="mt-6 md:mt-14 px-2 lg:px-0">
      <div>
        <h1 class="text-2xl">장바구니에 물품이 없습니다.</h1>
        <a class="btn btn-primary mt-10" href="/">담으러 가기</a>
      </div>
      <div class="lg:flex justify-between mb-20">
        <div></div>
        <div class="self-start shrink-0 flex items-center mt-10 mb-20">
          <span class="text-xl md:text-2xl">총 : $0</span
          ><label for="confirm-modal" class="modal-button btn btn-primary ml-5">구매하기</label>
        </div>
      </div>
    </div>
    <input type="checkbox" id="confirm-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">정말로 구매하시겠습니까?</h3>
        <p class="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
        <div class="modal-action">
          <label for="confirm-modal" class="btn btn-primary" data-cart="[object Object]">네</label
          ><label for="confirm-modal" class="btn btn-outline">아니오</label>
        </div>
      </div>
    </div>
  </section>
</section> */}
