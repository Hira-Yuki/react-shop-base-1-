import { MENUS } from '../../../constants/category'
import LinkItem from '../../../components/atom/LinkItem'

const CategoriesLink = ({ To, labelName }) => {

  return (
    <LinkItem
      classNames="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
      To={To}
    >
      {labelName}
    </LinkItem>
  )
}

const HederNavMenu = () => {

  return (
    <div className="flex-none hidden md:flex md:flex-1 ml-2">
      <CategoriesLink To="/fashion" labelName={MENUS.FASHION} />
      <CategoriesLink To="/accessory" labelName={MENUS.ACCESSORY} />
      <CategoriesLink To="/digital" labelName={MENUS.DIGITAL} />
    </div>
  )
}

export default HederNavMenu