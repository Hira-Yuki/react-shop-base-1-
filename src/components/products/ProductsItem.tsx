import LinkItem from '../atom/LinkItem'

const ProductsItem = ({ title, category, description, id, image, price, rating }) => {

  return (
    <LinkItem
      classNames="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
      To={`/product/${id}`}
    >
      <figure className="flex h-80 bg-white overflow-hidden">
        <img
          src={image}
          alt={title}
          className="transition-transform duration-300"
        />
      </figure>
      <div className="card-body bg-gray-100 dark:bg-gray-700">
        <p className="card-title text-base">{title}</p>
        <p className="text-base">{price}</p>
      </div>
    </LinkItem>
  )

}

export default ProductsItem