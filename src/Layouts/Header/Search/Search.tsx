import { useRecoilValueLoadable } from 'recoil'
import SearchButton from '../Atom/SearchButton'
import { productsList } from '../../../store/products'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Search = () => {
  const productList = useRecoilValueLoadable(productsList)
  const [inputValue, setInputValue] = useState("")
  const [isVisible, setIsVisible] = useState(false) // 입력 필드 가시성 관리 상태

  const navigate = useNavigate()

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible) // 가시성 상태 토글
  }

  const filteredProducts = productList.state === 'hasValue' && inputValue.trim() !== '' ?
    productList.contents.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    ) : [];

  const redirectProduct = (id) => {
    navigate(`/product/${id}`)
    setInputValue("")
    setIsVisible(false) // 리디렉션 후 입력 필드 숨기기

  }

  return (
    <div className="dropdown">
      <SearchButton toggleVisibility={toggleVisibility} />
      {isVisible ? <input
        type="text"
        placeholder="검색"
        className="fixed left-0 z-10 opacity-100 w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
        value={inputValue}
        onChange={handleInput}
      /> : <input
        type="text"
        placeholder="검색"
        className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
        value={inputValue}
        onChange={handleInput}
      />}
      <ul
        className="!fixed left-0 sm:!absolute sm:top-14 menu flex-nowrap dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-600"
      >
        {/* 검색된 항목이 나열될 곳 */}
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <button type="button" className="text-left js-searchedItem" onClick={() => redirectProduct(product.id)}>
              <span className="text-gray-600 dark:text-white line-clamp-2">
                {product.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search