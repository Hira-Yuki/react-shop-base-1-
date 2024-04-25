import { useEffect, useState } from "react"
import GetApi from "../../helpers/axios"
import { toCurrencyFormat } from "../../helpers/helpers"
import LinkItem from "../atom/LinkItem"
import IsLoading from "../products/ProductsDetail/IsLoading"
import { ProductItemType } from "../products/ProductsDetail"
import { useRecoilState } from "recoil"
import { ICartState, cartState } from "../../store/cart"

const CartItem = ({ id, count }) => {
  const [productItem, setProductItem] = useState<ProductItemType>({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    title: "",
    rating: {
      count: 0,
      rate: 0,
    },
  })
  const [cart, setCart] = useRecoilState<ICartState>(cartState);
  const [isLoading, setIsLoading] = useState(true)

  const fetchItem = async () => {
    try {
      const { data } = await GetApi.getProductsItem(id)
      setProductItem(data)
      setIsLoading(false)

    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }

  useEffect(() => {
    fetchItem()
  }, [])

  const increaseCount = () => {
    const newCount = count + 1;
    setCart(cart => ({
      ...cart,
      items: {
        ...cart.items,
        [id]: { id, count: newCount }
      }
    }));
  }

  const decreaseCount = () => {
    const newCount = count - 1;
    if (newCount < 1) {
      const newItems = { ...cart.items };
      delete newItems[id];
      setCart({ ...cart, items: newItems });
    } else {
      setCart(cart => ({
        ...cart,
        items: {
          ...cart.items,
          [id]: { id, count: newCount }
        }
      }));
    }
  }

  if (isLoading === true) return <IsLoading />

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <LinkItem To={`/product/${id}`} classNames={null}>
        <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
          <img
            src={productItem.image}
            alt={productItem.title}
            className="object-contain w-full h-48"
          />
        </figure>
      </LinkItem>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">
          <LinkItem classNames="link link-hover" To={`/product/${id}`}>
            {productItem.title}
          </LinkItem>
        </h2>
        <p className="mt-2 mb-4 text-3xl">
          {toCurrencyFormat(productItem.price * count)}
          <span className="text-2xl">
            ({toCurrencyFormat(productItem.price)})
          </span>
        </p>
        <div className="card-actions">
          <div className="btn-group">
            <button className="btn btn-primary" onClick={decreaseCount}>
              -
            </button>
            <button className="btn btn-ghost no-animation">
              {count}
            </button>
            <button className="btn btn-primary" onClick={increaseCount}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem


