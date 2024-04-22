import ProductsItem from "./ProductsItem"
import { useRecoilValueLoadable } from 'recoil'
import { IProduct, productsList } from '../../store/products'
import ProductsLoad from "./ProductsLoad"

const ProductsList = ({ limit, filter }) => {
  const productList = useRecoilValueLoadable(productsList)
  const isFashion = (list: IProduct[]) => list.filter((item: { category: string }) =>
    item.category === "men's clothing" || item.category === "women's clothing")
  const isJewelery = (list: IProduct[]) => list.filter((item: { category: string }) => item.category === 'jewelery')
  const isElectronics = (list: IProduct[]) => list.filter((item: { category: string }) => item.category === 'electronics')
  const dynamicCategory = (list: IProduct[]) => filter === "fashion" ? isFashion(list) : filter === "jewelery" ? isJewelery(list) : isElectronics(list)

  switch (productList.state) {
    case "hasValue":
      return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
          {dynamicCategory(productList.contents).slice(0, limit).map((item) => {
            return (
              <ProductsItem
                key={item.id}
                id={item.id}
                category={item.category}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            )
          })}
        </div>
      )
    case "loading":
      return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
          <ProductsLoad limit={limit} />
        </div>
      )
    case "hasError":
      return <div>오류가 발생했습니다. 데이터를 불러올 수 없습니다.</div>;
    default:
      return null
  }
}

export default ProductsList