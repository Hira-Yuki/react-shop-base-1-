import Rating from '../../common/Rating'
import LinkItem from '../../atom/LinkItem'

const IsLoading = () => {
  return (
    <>
      <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0 card bordered animate-pulse">
        <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
          <img

            src="https://via.placeholder.com/200?text=loading"
            alt="loading"
            className="object-contain h-72 w-full"
          />
        </figure>
        <div className="card-body px-1 lg:px-12">
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
          <div className="flex items-center">
            <div className="h-4 bg-gray-300 rounded w-1/4 mr-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          </div>
          <div className="h-20 bg-gray-300 rounded w-full mt-4 animate-pulse"></div>
          <p className="mt-2 mb-4 text-3xl">$0</p>
          <div className="card-actions">
            <button className="btn btn-primary">장바구니에 담기</button>
            <LinkItem classNames="btn btn-outline ml-1" To="/cart">장바구니로 이동</LinkItem>
          </div>
        </div>
      </div>
    </>
  )
}

export default IsLoading