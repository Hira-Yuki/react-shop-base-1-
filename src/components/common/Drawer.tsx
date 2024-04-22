import { Link } from "react-router-dom";
import { MENUS } from "../../constants/category";


const CategoriesLink = ({ goTo, labelName }) => {

  return (
    <li>
      <Link className="!text-gray-700 active:!text-white dark:!text-white" to={goTo}>
        {labelName}
      </Link>
    </li>
  )
}

const Drawer = (): JSX.Element => {

  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        <CategoriesLink goTo="/fashion" labelName={MENUS.FASHION} />
        <CategoriesLink goTo="/accessory" labelName={MENUS.ACCESSORY} />
        <CategoriesLink goTo="/digital" labelName={MENUS.DIGITAL} />
      </ul>
    </div>
  );
};

export default Drawer;
