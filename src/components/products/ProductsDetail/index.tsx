import { useParams } from 'react-router-dom';
import GetApi from '../../../helpers/axios';
import { useEffect, useState } from 'react';
import BreadCrumb from '../../common/Breadcrumb';
import IsLoading from './IsLoading';
import HasItem from './HasItem';

export interface ProductItemType {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  title: string
  rating: {
    count: number,
    rate: number,
  },
}

const ProductsDetail = () => {
  const { id } = useParams();
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
  const [categoryName, setCategoryName] = useState("...")
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
  }, [id])

  useEffect(() => {
    const newCategory =
      productItem.category === "men's clothing"
        || productItem.category === "women's clothing"
        ? "패션"
        : productItem.category === "jewelery"
          ? "액세서리"
          : productItem.category === "electronics"
            ? "디지털"
            : "..."
    setCategoryName(newCategory)
  }, [isLoading])


  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={categoryName} crumb={productItem ? productItem.title : "..."} />
      {isLoading
        ? (<IsLoading />)
        : (<HasItem productItem={productItem} />)
      }
    </section>
  )
}

export default ProductsDetail