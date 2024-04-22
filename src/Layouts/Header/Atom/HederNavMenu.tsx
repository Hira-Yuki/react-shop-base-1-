import React from 'react'
import { MENUS } from '../../../constants/category'
import { Link } from 'react-router-dom'

const CategoriesLink = ({ goTo, labelName }) => {

  return (
    <Link className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white" to={goTo}>
      {labelName}
    </Link>
  )
}

const HederNavMenu = () => {

  return (
    <div className="flex-none hidden md:flex md:flex-1 ml-2">
      <CategoriesLink goTo="/fashion" labelName={MENUS.FASHION} />
      <CategoriesLink goTo="/accessory" labelName={MENUS.ACCESSORY} />
      <CategoriesLink goTo="/digital" labelName={MENUS.DIGITAL} />
    </div>
  )
}

export default HederNavMenu