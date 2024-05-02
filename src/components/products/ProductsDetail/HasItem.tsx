import { useRecoilState } from 'recoil'
import { toCurrencyFormat } from '../../../helpers/helpers'
import LinkItem from '../../atom/LinkItem'
import Rating from '../../common/Rating'
import { ICartInfo, ICartState, addCartItem, cartState } from '../../../store/cart'

const HasItem = ({ productItem }) => {
  const [cartItems, setCartItems] = useRecoilState(cartState)

  const updateCart = (cart: ICartState, id: number, count: any) => {
    const newCartItem = addCartItem(cart, id, count)

    setCartItems(newCartItem)
  }

  return (
    <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
      <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
        <img
          src={productItem.image}
          alt={productItem.title}
          className="object-contain h-72"
        />
      </figure>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">
          {productItem?.title}<span className="badge badge-accent ml-2">NEW</span>
        </h2>
        <p>
          {productItem.description}
        </p>
        <Rating rate={productItem.rating.rate} count={productItem.rating.count} />
        <p className="mt-2 mb-4 text-3xl">{toCurrencyFormat(productItem.price)}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={() => updateCart(cartItems, productItem.id, 1)}>장바구니에 담기</button>
          <LinkItem classNames="btn btn-outline ml-1" To="/cart">장바구니로 이동</LinkItem>
        </div>
      </div>
    </div>
  )
}

export default HasItem