import BreadCrumb from '../../common/Breadcrumb'
import Eclipse_loading from '../../../assets/img/svg/Eclipse_loading.svg'
import Rating from '../../common/Rating'
import LinkItem from '../../atom/LinkItem'

const IsLoading = () => {
  return (
    <>
      <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
        <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
          <img
            src={Eclipse_loading}
            alt={""}
            className="object-contain w-full h-72"
          />
        </figure>
        <div className="card-body px-1 lg:px-12">
          <h2 className="card-title">
            {""}
          </h2>
          <p>
            {""}
          </p>
          <Rating />
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