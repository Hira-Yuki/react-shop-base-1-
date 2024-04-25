import { useRecoilValueLoadable } from "recoil"
import { IProduct, productsList } from "../../../store/products"
import ProductsItem from "../ProductsItem"
import ProductsLoad from "../ProductsLoad"

const JeweleryList = () => {
  const productList = useRecoilValueLoadable(productsList)
  const isJewelery = (list: IProduct[]) => list.filter((item: { category: string }) => item.category === 'jewelery')

  switch (productList.state) {
    case "hasValue":
      return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
          {isJewelery(productList.contents).map((item) => {
            return (
              <ProductsItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            )
          })}
        </div>
      )
    case "loading":
      return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
          <ProductsLoad limit={20} />
        </div>
      )
    case "hasError":
      return <div>오류가 발생했습니다. 데이터를 불러올 수 없습니다.</div>;
    default:
      return null
  }
}



export default JeweleryList




