import React from 'react'
import LinkItem from '../atom/LinkItem'

const NoCartItem = () => {
  return (
    <div>
      <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
      <LinkItem To="/" classNames="btn btn-primary mt-10">
        담으러 가기
      </LinkItem>
    </div>
  )
}

export default NoCartItem