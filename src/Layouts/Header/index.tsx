import React from 'react'
import HederNavMenu from './Atom/HederNavMenu'
import Logo from './Atom/Logo'
import HamburgerIcon from './Atom/HamburgerIcon'
import SwapThem from './Them/SwapThem'
import CartButton from './CartButton/CartButton'
import Search from './Search/Search'

const Header = () => {

  return (
    <header className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <HamburgerIcon />
        <Logo />
        <HederNavMenu />
        <div className="flex items-center px-2">
          <SwapThem />
          <Search />
          <CartButton />
        </div>
      </div>
    </header>
  )
}

export default Header