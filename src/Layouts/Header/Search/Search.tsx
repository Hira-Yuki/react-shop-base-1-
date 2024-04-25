import { useRecoilValueLoadable } from 'recoil'
import SearchButton from '../Atom/SearchButton'
import { productsList } from '../../../store/products'
import { useState } from 'react'

const Search = () => {
  const productList = useRecoilValueLoadable(productsList)
  const [inputValue, setInputValue] = useState("")

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const filteredProducts = productList.state === 'hasValue' && inputValue.trim() !== '' ?
    productList.contents.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    ) : [];

  return (
    <div className="dropdown">
      <SearchButton />
      <input
        type="text"
        placeholder="검색"
        className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
        value={inputValue}
        onChange={handleInput}
      />
      <ul
        className="!fixed left-0 sm:!absolute sm:top-14 menu flex-nowrap dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-600"
      >
        {/* 검색된 항목이 나열될 곳 */}
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <button type="button" className="text-left js-searchedItem">
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