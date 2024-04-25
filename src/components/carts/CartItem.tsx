import { useEffect, useState } from "react"
import GetApi from "../../helpers/axios"
import { toCurrencyFormat } from "../../helpers/helpers"
import LinkItem from "../atom/LinkItem"
import IsLoading from "../products/ProductsDetail/IsLoading"
import { ProductItemType } from "../products/ProductsDetail"

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

  if (isLoading === true) return <IsLoading />

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <LinkItem To={`/product/${id}`} classNames={""}>
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
            <button className="btn btn-primary">
              -
            </button>
            <button className="btn btn-ghost no-animation">
              {count}
            </button>
            <button className="btn btn-primary">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem


