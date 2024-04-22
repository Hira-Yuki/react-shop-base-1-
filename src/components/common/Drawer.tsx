import { Link } from "react-router-dom";
import { MENUS } from "../../constants/category";
import LinkItem from "../atom/LinkItem";


const DrawerLink = ({ To, labelName }) => {

  return (
    <li>
      <LinkItem
        classNames={"!text-gray-700 active:!text-white dark:!text-white"}
        To={To}
      >
        {labelName}
      </LinkItem>
    </li>
  )
}

const Drawer = (): JSX.Element => {

  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        <DrawerLink To="/fashion" labelName={MENUS.FASHION} />
        <DrawerLink To="/accessory" labelName={MENUS.ACCESSORY} />
        <DrawerLink To="/digital" labelName={MENUS.DIGITAL} />
      </ul>
    </div>
  );
};

export default Drawer;
