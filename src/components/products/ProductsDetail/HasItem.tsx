import React from 'react'
import { toCurrencyFormat } from '../../../helpers/helpers'
import LinkItem from '../../atom/LinkItem'
import Rating from '../../common/Rating'

const HasItem = ({ productItem }) => {
  return (
    <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
      <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
        <img
          src={productItem.image}
          alt={productItem.title}
          className="object-contain w-full h-72"
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
          <button className="btn btn-primary">장바구니에 담기</button>
          <LinkItem classNames="btn btn-outline ml-1" To="/cart">장바구니로 이동</LinkItem>
        </div>
      </div>
    </div>
  )
}

export default HasItem